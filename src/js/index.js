import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!')

const secondHand = document.querySelector('.clock__second--js');
const minuteHand = document.querySelector('.clock__minute--js');
const hourHand = document.querySelector('.clock__hour--js');

function myDate() {
    
    const date = new Date();
    const seconds = date.getSeconds();

    if(seconds<=60){
    const secondsMove = (seconds/60)*360+180;
    secondHand.style.transform = `rotate(${secondsMove}deg)`;
    console.log(seconds);}

    const minutes = date.getMinutes();
    const minutesMove = (minutes/60)*360 +180;
    minuteHand.style.transform = `rotate(${minutesMove}deg)`;

    const hours = date.getHours();
    const hoursMove = (hours/12)*360 +180;
    hourHand.style.transform = `rotate(${hoursMove}deg)`;

}

setInterval(myDate, 1000);