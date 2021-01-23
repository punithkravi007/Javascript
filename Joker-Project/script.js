(function () {
  JOKE_API_URL = "https://api.chucknorris.io/jokes/random";

  setInterval(() => {
    fetch(JOKE_API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("JOKE : ");
        createJoke(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, 1000);
})();

const createJoke = (jokeData) => {
  
  var category = jokeData.length > 0 ? jokeData.categories[0] : "Unknown";
  var jokesDiv = document.getElementsByClassName("list-group")[0];

  var aTag = document.createElement("a");
  aTag.classList.add("list-group-item");

  var categoryHeader = document.createElement("h4");
  categoryHeader.classList.add("list-group-item-heading");
  var categoryText = document.createTextNode(`Catergory : ${category}`);

  var createdDateSpan = document.createElement("span");
  createdDateSpan.classList.add("created-date");
  var createdDateText = document.createTextNode(`Created Date :  ${jokeData.created_at}`);

  createdDateSpan.appendChild(createdDateText);
  categoryHeader.appendChild(categoryText);
  categoryHeader.appendChild(createdDateSpan);

  var jokediv = document.createElement("p");
  jokediv.classList.add("list-group-item-text");

  var rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  var imageDiv = document.createElement("div");
  imageDiv.classList.add("col-sm-1");

  var image = document.createElement("img");
  image.setAttribute(
    "src",
    `${jokeData.icon_url}`
  );

  imageDiv.appendChild(image);

  var joke = document.createElement("div");
  joke.classList.add("col-sm-11");

  var jokeText = document.createTextNode(
    `${jokeData.value}`
  );
  joke.appendChild(jokeText);

  rowDiv.appendChild(imageDiv);
  rowDiv.appendChild(joke);

  jokediv.appendChild(rowDiv);

  aTag.appendChild(categoryHeader);
  aTag.appendChild(jokediv);
  jokesDiv.appendChild(aTag);
};
