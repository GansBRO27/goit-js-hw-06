const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const array = [];
ingredients.forEach(function (ingredient) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  array.push(listItem);
});
const list = document.querySelector("#ingredients");
list.append(...array);
