/* <div id="counter">
  <button type="button" data-action="decrement">
    -1
  </button>
  <span id="value">0</span>
  <button type="button" data-action="increment">
    +1
  </button>
</div>; */
//Створи змінну counterValue, в якій буде зберігатися
// поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких
//збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;
const valueRef = document.querySelector("#value");

const counter = document.querySelector("#counter");

const btnDescrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

btnDescrement.addEventListener("click", onClickDecrementBtn);
btnIncrement.addEventListener("click", onClickIncrementBtn);
function onClickDecrementBtn(event) {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
function onClickIncrementBtn(event) {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
