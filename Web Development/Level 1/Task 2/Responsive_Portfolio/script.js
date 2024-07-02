// Toggle menu
const menu = document.querySelector(".header .bx-menu");
const navbar = document.querySelector(".header .navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Scroll reveal animations
ScrollReveal().reveal(
  ".home-content, .about-content, .services-container, .portfolio-container, .contact form",
  {
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  }
);
