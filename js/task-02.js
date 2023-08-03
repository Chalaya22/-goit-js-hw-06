const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const itemElem = ingredients.map((ingredient) => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  return list;
});
ingredientsList.append(...itemElem);
//**** примінили метод map() до масиву з інгрідієнтами( в параметр поклали інгрідієнт)
//**** тепер на кожній ітераціі  ми створюємо нове ліжко,
// додаєм текстовий контент = ingredient
//додаємо клас "item"
// повертаєм результат list
// цикл завершився
// після циклу додаєм до нашего html-документа ingredientsList створеений itemElem( розпилюєм обьєкт в масив)
