const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.createElement("ul");
list.id = "ingredients";

for (let i = 0; i < ingredients.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredients[i];
  listItem.classList.add("item");
  list.appendChild(listItem);
}

document.body.appendChild(list);