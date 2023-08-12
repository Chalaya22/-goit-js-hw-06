/* <body>
  <input type="text" id="name-input" placeholder="Please enter your name" />
  <h1>
    Hello, <span id="name-output">Anonymous</span>!
  </h1>
</body>; */

// Напиши скрипт, який під час набору тексту
// в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній,у спані повинен відображатися рядок "Anonymous".
const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");
const getInputVal = ({ target }) =>
  (nameRef.innerText = target.value ? target.value : "Anonymous");
inputRef.addEventListener("input", getInputVal);

//target передает ссылку на значение inputRef.
