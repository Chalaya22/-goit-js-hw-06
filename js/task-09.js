//<div class="widget">
// <p>
//  Background color: <span class="color">-</span>
//</p>
//<button type="button" class="change-color">
// Change color
//</button>
//</div>;

// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color
//    і виводить значення кольору в span.color.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//функция генерирует рандомный цвет
const body = document.body;
const widget = document.querySelector(".widget");
const textColor = document.querySelector(".color");
const btn = document.querySelector(".change-color");

const changeColor = () => {
  textColor.textContent = getRandomHexColor(); // получаем номер в виде текст контента
  body.style.backgroundColor = getRandomHexColor(); //рандомно меняются цвета
};
btn.addEventListener("click", changeColor);
