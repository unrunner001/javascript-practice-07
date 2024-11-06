function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const inputNumber = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  destroyBoxes();
  const elements = [];
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.minWidth = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    size += 10;
  }
  console.log(elements);

  boxes.append(...elements);
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
create.addEventListener("click", () => {
  const item = inputNumber.value;
  if (item >= 1 && item <= 100) {
    createBoxes(item);
    inputNumber.value = "";
  } else {
    alert("You need enter nubmer between 1 and 100");
  }
});
destroy.addEventListener("click", destroyBoxes);
