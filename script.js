let allBtn = document.getElementById("all");
let projectsBtn = document.getElementById("projects");
let exercisesBtn = document.getElementById("exercises");

let e1a = document.getElementById("exercise-1a");
let e1b = document.getElementById("exercise-1b");
let e2 = document.getElementById("exercise-2");
let e3 = document.getElementById("exercise-3");
let e4 = document.getElementById("exercise-4");
let e5 = document.getElementById("exercise-5");
let e6 = document.getElementById("exercise-6");
let e7 = document.getElementById("exercise-7");
let e8 = document.getElementById("exercise-8");
let e9 = document.getElementById("exercise-9");
let p1 = document.getElementById("project-1");
let p2 = document.getElementById("project-2");
let p3 = document.getElementById("project-3");


function showAll() {
    let cards = document.querySelectorAll(".card");
    for (let card of cards) {
        card.style.display = "block";
    }
    projectsBtn.style.backgroundColor = "white"
    projectsBtn.style.color = "black";
    exercisesBtn.style.backgroundColor = "white"
    exercisesBtn.style.color = "black";
    allBtn.style.backgroundColor = "black";
    allBtn.style.color = "white"
}

function showProjects() {
    let cards = document.querySelectorAll(".card");
    for (let card of cards) {
        card.style.display = "block";
    }
    e1a.style.display = "none";
    e1b.style.display = "none";
    e2.style.display = "none";
    e3.style.display = "none";
    e4.style.display = "none";
    e5.style.display = "none";
    e6.style.display = "none";
    e7.style.display = "none";
    e8.style.display = "none";
    e9.style.display = "none";
    allBtn.style.backgroundColor = "white"
    allBtn.style.color = "black";
    exercisesBtn.style.backgroundColor = "white"
    exercisesBtn.style.color = "black";
    projectsBtn.style.backgroundColor = "black";
    projectsBtn.style.color = "white"
}

function showExercises() {
    let cards = document.querySelectorAll(".card");
    for (let card of cards) {
        card.style.display = "block";
    }
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";

    allBtn.style.backgroundColor = "white"
    allBtn.style.color = "black";
    projectsBtn.style.backgroundColor = "white"
    projectsBtn.style.color = "black";
    exercisesBtn.style.backgroundColor = "black";
    exercisesBtn.style.color = "white"
}


