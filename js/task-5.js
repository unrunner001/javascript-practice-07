function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyMain = document.querySelector("body");
const btnColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btnColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyMain.style.backgroundColor = color;
  spanColor.style.color = color;
  spanColor.textContent = `- ${color}`;
});
