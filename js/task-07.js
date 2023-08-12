//<input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text,
// оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок,буде змінюватися розмір тексту.

document.querySelector("body").style.backgroundColor = "#ff0000";
const inputRengeRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");
const sizeControl = ({ currentTarget }) =>
  (textRef.style.fontSize = `${currentTarget.value}px`);
inputRengeRef.addEventListener("input", sizeControl);
