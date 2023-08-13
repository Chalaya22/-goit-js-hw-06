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
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
//функция генерирует рандомный цвет

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const textColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const body = document.body;

const changeColor = () => {
  const randomColor = getRandomHexColor();
  textColor.textContent = randomColor; // получаем номер в виде текст контента
  body.style.backgroundColor = randomColor; //рандомно меняются цвета
};
changeColorBtn.addEventListener("click", changeColor);
