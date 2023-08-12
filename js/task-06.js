//<input
//  type="text"
//  id="validation-input"
//  data-length="6"
//  placeholder="Please enter 6 symbols"
///>;
// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//     якщо неправильна кількість - червоним.
// document.querySelector("body").style.backgroundColor = "#EBECF0";
const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onBlurBrdColor);

function onBlurBrdColor(event) {
  let inputValue = event.currentTarget.value;
  // console.log(inputValue); // показывает текущее значение введенных символов
  if (inputValue.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");
  }
  if (
    inputRef.value.length !== Number(inputRef.dataset.length) &&
    inputRef.value.length !== 0
  ) {
    inputRef.classList.add("invalid");
  }
}
