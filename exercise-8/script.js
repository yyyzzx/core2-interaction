function updateTime() {

//storing variables
let today = new Date();
console.log(today);

let thisHour = today.getHours();
console.log(thisHour);

let thisMinute = today.getMinutes();
console.log(thisMinute);

let thisSecond = today.getSeconds();
console.log(thisSecond);

//conditionals
if(thisSecond < 10){
    thisSecond = "0" + thisSecond;
}
if(thisMinute < 10) {
    thisMinute = "0" + thisMinute;
}

//add to inner HTML
let hour = document.getElementById("hourHere");
let minute = document.getElementById("minuteHere");
let second = document.getElementById("secondHere");
hour.innerHTML = thisHour;
minute.innerHTML = thisMinute;
second.innerHTML = thisSecond;

//change scale to time
let hoursToSize = map(thisHour, 0, 23, 100, 700);
hour.style.fontSize = hoursToSize + "pt";

let minutesToSize = map(thisMinute, 0, 59, 100, 700);
minute.style.fontSize = minutesToSize + "pt";

let secondsToSize = map(thisSecond, 0, 59, 100, 700);
second.style.fontSize = secondsToSize + "pt";

//change opacity to time
let hoursToOpacity = map(thisHour, 0, 23, 0.3, 1);
hour.style.opacity = hoursToOpacity;

let minutesToOpacity = map(thisMinute, 0, 59, 0.3, 1);
minute.style.opacity = minutesToOpacity;

let secondsToOpacity = map(thisSecond, 0, 59, 0.5, 1);
second.style.opacity = secondsToOpacity;

}
setInterval(updateTime, 1000);

//map function
function map(value, low1, high1, low2, high2){
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
