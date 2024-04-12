let textDisplay = document.getElementById("textDisplay");

//change text
let textInput = document.getElementById("specimen");
function changeText() {
    textDisplay.innerHTML = textInput.value;
    textInput:hover.style.color = "var(--grey)";
}

//change width
let widthImput = document.getElementById("width");
let widthValue = document.getElementById("widthValue");
function changeWidth() {
    textDisplay.style.fontStretch = widthImput.value + "%";
    widthValue.innerHTML = "Width: " + widthImput.value + "%";
}

//change size
let sizeInput = document.getElementById("size");
let sizeValue = document.getElementById("sizeValue");
function changeSize() {
    textDisplay.style.fontSize = sizeInput.value + "pt";
    sizeValue.innerHTML = "Font size: " + sizeInput.value + "pt";
}

//aalt
function alternative() {
    textDisplay.classList.toggle("aalt");
}

//italic
function italic() {
    textDisplay.classList.toggle("italic");
}

//decenders
function decenders() {
    textDisplay.classList.toggle("decenders");
}

//lowercases
function lowercases() {
    textDisplay.classList.toggle("lowercases");
}

//short
function short() {
    textDisplay.classList.toggle("short");
}