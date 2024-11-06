"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const info = {};
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  info.email = email.trim();
  info.password = password.trim();
  console.log(info);
  form.reset();
});
