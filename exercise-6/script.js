setTimeout("window.location.reload()",1000);

//for center squares
let boxes = document.querySelectorAll(".box");
let colors = ["#180252", "#2d0be5", "#77eea6", "#ccf8f0", "floralwhite", "#f2e3ed"];

for (let box of boxes) {
    let randomColor = Math.floor(Math.random() * colors.length);
    box.style.backgroundColor = colors[randomColor];
}

//for outer squares
let boxes1 = document.querySelectorAll(".box1");
let colors1 = ["#180252", "#2d0be5", "#77eea6", "#ccf8f0", "#f2e3ed"];

for (let box1 of boxes1) {
    let randomNumber = Math.random() * 10;
    if (randomNumber > 8){
        let randomColor1 = Math.floor(Math.random() * colors1.length);
        box1.style.backgroundColor = colors1[randomColor1];
    }
    else {
        box1.style.backgroundColor = "floralwhite";
    }

}