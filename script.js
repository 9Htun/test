const categories = document.querySelector(".categories");
const dropdown = document.querySelector(".categories-dropdown");

categories.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("show");
});

// Optional: Close dropdown when clicking outside
// document.addEventListener("click", (e) => {
//   if (!categories.contains(e.target) && !dropdown.contains(e.target)) {
//     dropdown.classList.remove("show");
//   }
// });

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },
});
