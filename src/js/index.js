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
