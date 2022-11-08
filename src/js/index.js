import "../scss/main.scss";

console.log("HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!");

const secondHand = document.querySelector(".clock__second--js");
const minuteHand = document.querySelector(".clock__minute--js");
const hourHand = document.querySelector(".clock__hour--js");

function myDate() {
  const date = new Date();

  const seconds = date.getSeconds() / 60;
  const secondsMove = seconds * 360;
  secondHand.style.transform = `rotate(${secondsMove}deg)`;

  const minutes = (seconds + date.getMinutes()) / 60;
  const minutesMove = minutes * 360;
  minuteHand.style.transform = `rotate(${minutesMove}deg)`;

  const hours = (minutes + date.getHours()) / 12;
  const hoursMove = hours * 360;
  hourHand.style.transform = `rotate(${hoursMove}deg)`;
}
setInterval(myDate, 1000);

myDate();

//London//

const londonHour = document.querySelector(".hour--js");
const londonMinute = document.querySelector(".minute--js");
const londonSecond = document.querySelector(".second--js");

const londonTime = function () {
  const zone = londonSecond.getAttribute("id");
  const date = luxon.DateTime.now().setZone(zone);

  //second//
  const seconds = date.toFormat("ss") / 60;
  const secondDegree = seconds * 360;
  londonSecond.style.transform = `rotate(${secondDegree}deg)`;

  //minute//
  const minutes = date.toFormat("mm") / 60;
  const minuteDegree = minutes * 360;
  londonMinute.style.transform = `rotate(${minuteDegree}deg)`;

  //hour//
  const hours = date.toFormat("HH") / 12;
  const hourDegree = hours * 360;
  londonHour.style.transform = `rotate(${hourDegree}deg)`;
};

londonTime();
setInterval(londonTime, 1000);

//New York//

const nyHour = document.querySelector(".hour__1--js");
const nyMinute = document.querySelector(".minute__1--js");
const nySecond = document.querySelector(".second__1--js");

const nyTime = function () {
  const zone = nySecond.getAttribute("id");
  const date = luxon.DateTime.now().setZone(zone);

  //second//
  const seconds = date.toFormat("ss") / 60;
  const secondDegree = seconds * 360;
  nySecond.style.transform = `rotate(${secondDegree}deg)`;

  //minute//
  const minutes = date.toFormat("mm") / 60;
  const minuteDegree = minutes * 360;
  nyMinute.style.transform = `rotate(${minuteDegree}deg)`;

  //hour//
  const hours = date.toFormat("HH") / 12;
  const hourDegree = hours * 360;
  nyHour.style.transform = `rotate(${hourDegree}deg)`;
};

nyTime();
setInterval(nyTime, 1000);

//Tokio//

const tokioHour = document.querySelector(".hour__2--js");
const tokioMinute = document.querySelector(".minute__2--js");
const tokioSecond = document.querySelector(".second__2--js");

const tokioTime = function () {
  const zone = tokioSecond.getAttribute("id");
  const date = luxon.DateTime.now().setZone(zone);

  //second//
  const seconds = date.toFormat("ss") / 60;
  const secondDegree = seconds * 360;
  tokioSecond.style.transform = `rotate(${secondDegree}deg)`;

  //minute//
  const minutes = date.toFormat("mm") / 60;
  const minuteDegree = minutes * 360;
  tokioMinute.style.transform = `rotate(${minuteDegree}deg)`;

  //hour//
  const hours = date.toFormat("HH") / 12;
  const hourDegree = hours * 360;
  tokioHour.style.transform = `rotate(${hourDegree}deg)`;
};

tokioTime();
setInterval(tokioTime, 1000);