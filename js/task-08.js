//<form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обробка відправлення форми form.login - form повинна відбуватися
// відповідно до події submit.
// Під час відправлення формисторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//  що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення
// полів в об'єкт, де ім'я поля буде ім'ям властивості,
// а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення
//  полів форми методом reset.

document.querySelector("body").style.backgroundColor = "#000000";
const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmitHander);
const totalFildsValue = {};
function onSubmitHander(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === "" || password.value === "") {
    alert("Complate fild");
  } else {
    totalFildsValue.email = email.valua;
    totalFildsValue.password = password.value;
    console.log(totalFildsValue);
  }
  event.currentTarget.reset();
}
//Метод reset() используется для очистки или для сброса к дефолтным значениям всех полей формы, например, после отправки данных на сервер.
//   //   //{email: 'chalayaolga22@gmail.com', password: '123456789'}
//   //   email: "chalayaolga22@gmail.com";
//   //   password: "123456789";
