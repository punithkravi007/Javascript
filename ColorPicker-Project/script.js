var red = document.querySelector(".red");
var pink = document.querySelector(".pink");
var black = document.querySelector(".black");
var orange = document.querySelector(".orange");
var blue = document.querySelector(".blue");

const displaySelectedColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

console.log(displaySelectedColor(red));
