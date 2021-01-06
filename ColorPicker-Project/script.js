var red = document.querySelector(".red");
var pink = document.querySelector(".pink");
var black = document.querySelector(".black");
var orange = document.querySelector(".orange");
var blue = document.querySelector(".blue");

var color_selected_div = document.querySelector(".selected-color"); 


const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

const magicColorChanger = (selectedElement) => {
    selectedElement.addEventListener("click", () => {
        color_selected_div.style.backgroundColor = getBGColor(selectedElement)
    });
}

magicColorChanger(red);
magicColorChanger(blue);
magicColorChanger(black);
magicColorChanger(pink);
magicColorChanger(orange);
