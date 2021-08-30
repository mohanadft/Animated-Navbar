let toggle = document.querySelector(".inner-toggle"),
  toggleContainer = document.querySelector(".toggle");
nav = document.querySelector(".navigation");

toggleContainer.addEventListener("click", function () {
  toggle.classList.toggle("active");
  toggleContainer.classList.toggle("active");
  nav.classList.toggle("active");
});
