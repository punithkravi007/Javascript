(function () {
  var r = new Resumable({
    target: "http://localhost:5000/resumable_upload",
    query: {},
    maxChunkRetries: 2,
    maxFiles: 3,
    prioritizeFirstAndLastChunk: true,
    simultaneousUploads: 1,
    chunkSize: 5 * 1024 * 1024,
  });
  var results = $("#results"),
    draggable = $("#dragHere"),
    uploadFile = $("#uploadFiles"),
    browseButton = $("#browseButton"),
    nothingToUpload = $("[data-nothingToUpload]");

  if (!r.support) location.href = "http://browsehappy.com/";

  r.assignBrowse(browseButton);
  r.assignDrop(draggable);

  r.on("fileAdded", function computeHashes(resumableFile, offset, fileReader) {
    var chunkSize = resumableFile.resumableObj.opts.chunkSize;
    var numChunks = Math.max(
      Math.floor(resumableFile.file.size / chunkSize),
      1
    );
    var forceChunkSize = resumableFile.getOpt("forceChunkSize");
    var startByte, endByte;
    var hasher = new SparkMD5();
    var func = resumableFile.file.slice
      ? "slice"
      : resumableFile.file.mozSlice
      ? "mozSlice"
      : resumableFile.file.webkitSlice
      ? "webkitSlice"
      : "slice";
    var bytes;

    resumableFile.hashes = resumableFile.hashes || [];
    fileReader = fileReader || new FileReader();
    offset = (typeof offset == 'object') ? 0 : offset;

    startByte = offset * chunkSize;
    endByte = Math.min(resumableFile.file.size, (offset + 1) * chunkSize);

    if (resumableFile.file.size - endByte < chunkSize && !forceChunkSize) {
      endByte = resumableFile.file.size;
    }
    bytes = resumableFile.file[func](startByte, endByte);

    fileReader.onloadend = function (e) {
      var spark = SparkMD5.ArrayBuffer.hash(e.target.result);
       
      resumableFile.hashes.push(spark);
      console.log(resumableFile);
      if (numChunks > offset + 1) {
        computeHashes(resumableFile, offset + 1, fileReader);
      }
      if (numChunks == offset + 1) {
        r.upload();
      }
      offset = numChunks-1
      resumableFile.resumableObj.opts.query = offset
    };

    fileReader.readAsArrayBuffer(bytes);

    // Show progress pabr
    $(".resumable-progress, .resumable-list").show();
    // Show pause, hide resume
    $(".resumable-progress .progress-resume-link").hide();
    $(".resumable-progress .progress-pause-link").show();
    // Add the file to the list
    $(".resumable-list").append(
      '<li class="resumable-file-' +
        resumableFile.uniqueIdentifier +
        '">Uploading <span class="resumable-file-name"></span> <span class="resumable-file-progress"></span>'
    );
    $(
      ".resumable-file-" +
        resumableFile.uniqueIdentifier +
        " .resumable-file-name"
    ).html(resumableFile.fileName);
    // Actually start the upload
  });

  uploadFile.on("click", function () {
    if (results.children().length > 0) {
      r.upload();
    } else {
      nothingToUpload.fadeIn();
      setTimeout(function () {
        nothingToUpload.fadeOut();
      }, 3000);
    }
  });

  $(document).on("click", ".deleteFile", function () {
    var self = $(this),
      parent = self.parent(),
      identifier = parent.data("uniqueid"),
      file = r.getFromUniqueIdentifier(identifier);

    r.removeFile(file);
    parent.remove();
  });

  r.on("fileProgress", function (file) {
    var progress = Math.floor(file.progress() * 100);
    $("[data-uniqueId=" + file.uniqueIdentifier + "]")
      .find(".meter")
      .css("width", progress + "%");
    $("[data-uniqueId=" + file.uniqueIdentifier + "]")
      .find(".meter")
      .html("&nbsp;" + progress + "%");
  });

  r.on("fileSuccess", function (file, message) {
    $("[data-uniqueId=" + file.uniqueIdentifier + "]")
      .find(".progress")
      .addClass("success");
  });

  r.on("uploadStart", function () {
    $(".alert-box").text("Uploading....");
  });

  r.on("complete", function () {
    $(".alert-box").text("Done Uploading");
  });
})();
