import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!')

const secondHand = document.querySelector('.clock__second--js')

function myDate() {
    const date = new Date();
    const seconds = date.getSeconds();
    const secondsDegree = (seconds/60)*360 + 180;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    console.log(seconds);
}

setInterval(myDate, 1000);