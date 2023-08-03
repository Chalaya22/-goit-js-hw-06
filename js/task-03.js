const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallaryItems = ({ url, alt }) =>
  `<li class ="styleLi"><img src="${url}" alt="${alt}" width = 300 heigth = auto ></li>`;
const galleryMarkup = images.reduce(
  (acc, item) => acc + gallaryItems(item),
  []
);
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
console.dir(gallery);
//*****маємо масив обьєктів.
// в обьєкті є властивості зображення url, alt
// створюємо  стрілочну функцію в якій в якості параметрів передаєм властивості обьєкта у фігурних дужках
// стваорюємо в функціі  ліжко у вигляді шаблоного рядка
// шаблоний рядок спочатку  робимо в html, потім вирізаємо в JS-файл
// створюємо змінну galleryMarkup і використовуєм для масива images метод reduce для додавання ліжок згідно кількості  обьектів в масиві
// створюємо document.querySelector
// до нього визиваємо insertAdjacentHTML, який додає кожну ліжку в кінець списку( одразу всі)
