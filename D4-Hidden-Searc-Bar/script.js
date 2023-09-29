const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.getElementById("search");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus(); // içindeki yazı aktive oluyo
});
