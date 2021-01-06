var counter = document.querySelector(".counter");
var follower = document.querySelector(".follower");

let count = 0;
setInterval(() => {
    if(count <1000){
        ++count;
        counter.innerHTML = count;
    }
},1);

setTimeout(() => {
    follower.innerHTML = `Wow! You have reached ${count} followers on Instagram!`;
}, 6000);