!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);o(1);console.log("HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!");var r=document.querySelector(".clock__second--js"),n=document.querySelector(".clock__minute--js"),a=document.querySelector(".clock__hour--js");function c(){var t=new Date,e=t.getSeconds()/60,o=360*e;r.style.transform="rotate(".concat(o,"deg)");var c=(e+t.getMinutes())/60,u=360*c;n.style.transform="rotate(".concat(u,"deg)");var s=360*((c+t.getHours())/12);a.style.transform="rotate(".concat(s,"deg)")}setInterval(c,1e3),c();var u=document.querySelector(".hour--js"),s=document.querySelector(".minute--js"),l=document.querySelector(".second--js"),m=function(){var t=l.getAttribute("id"),e=luxon.DateTime.now().setZone(t),o=360*(e.toFormat("ss")/60);l.style.transform="rotate(".concat(o,"deg)");var r=360*(e.toFormat("mm")/60);s.style.transform="rotate(".concat(r,"deg)");var n=360*(e.toFormat("HH")/12);u.style.transform="rotate(".concat(n,"deg)")};m(),setInterval(m,1e3);var i=document.querySelector(".hour__1--js"),d=document.querySelector(".minute__1--js"),f=document.querySelector(".second__1--js"),y=function(){var t=f.getAttribute("id"),e=luxon.DateTime.now().setZone(t),o=360*(e.toFormat("ss")/60);f.style.transform="rotate(".concat(o,"deg)");var r=360*(e.toFormat("mm")/60);d.style.transform="rotate(".concat(r,"deg)");var n=360*(e.toFormat("HH")/12);i.style.transform="rotate(".concat(n,"deg)")};y(),setInterval(y,1e3);var v=document.querySelector(".hour__2--js"),g=document.querySelector(".minute__2--js"),_=document.querySelector(".second__2--js"),j=function(){var t=_.getAttribute("id"),e=luxon.DateTime.now().setZone(t),o=360*(e.toFormat("ss")/60);_.style.transform="rotate(".concat(o,"deg)");var r=360*(e.toFormat("mm")/60);g.style.transform="rotate(".concat(r,"deg)");var n=360*(e.toFormat("HH")/12);v.style.transform="rotate(".concat(n,"deg)")};j(),setInterval(j,1e3)},function(t,e,o){}]);