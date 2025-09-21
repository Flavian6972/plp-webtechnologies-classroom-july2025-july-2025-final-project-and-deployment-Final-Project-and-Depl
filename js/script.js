// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("message");
  const counter  = document.getElementById("char-count");

  textarea.addEventListener("input", () => {
    const remaining = 500 - textarea.value.length;
    counter.textContent = `${remaining} characters remaining`;
  });
}); 