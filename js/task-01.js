// const list = document.querySelector("#categories");
// console.dir(list);

// const getCategories = document.querySelectorAll("li.item");
// console.dir(getCategories);
// getCategories.forEach((item) => {

// })

// console.dir([...list.children]);
const createObjectOfCategories = () => {
  const categories = document.querySelector("#categories");
  const objLiItem = categories.children;
  console.log("Number of categories:", categories.children.length);
  const arrLiItem = Array.from(objLiItem);
  arrLiItem.forEach((child) => {
    const obj = {
      Category: child.firstElementChild.textContent,
      Elements: child.lastElementChild.children.length,
    };
    console.log("Category:", obj.Category);
    console.log("Elements:", obj.Elements);
    return;
  });
};
createObjectOfCategories();
