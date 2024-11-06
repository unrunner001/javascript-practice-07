"use strict";

const categories = document.querySelectorAll(".item");
console.log(`Number of Categories: ${categories.length}`);

categories.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("ul li").length}`);
});
