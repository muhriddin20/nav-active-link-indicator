const indicator = document.querySelector(".indicator");
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    indicator.style.width = `${e.target.offsetWidth + 10}px`;
    indicator.style.left = `${e.target.offsetLeft - 5}px`;

    navLinks.forEach((el) => {
      el.style.color = "#111";
    });

    item.style.color = "#fff";
  });
});
