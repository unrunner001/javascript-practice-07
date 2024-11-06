"use strict";

const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() === "") {
    spanName.textContent = "Anonymous";
  } else {
    spanName.textContent = event.currentTarget.value.trim();
  }
});
