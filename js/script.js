// MENU
const toolsLink = document.getElementById("toolsLink");
const subMenu = document.getElementById("subMenu");

// Add a click event listener to the document
document.addEventListener("click", function (event) {
  // If the click is not on the "Tools" link or inside the submenu, hide the submenu
  if (event.target !== toolsLink && !subMenu.contains(event.target)) {
    subMenu.style.display = "none";
  }
});

// Add a click event listener to the "Tools" link
toolsLink.addEventListener("click", function (event) {
  event.preventDefault();
  subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
});

// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Sticky navigation

const sectionHeroEl = document.querySelector(".main-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// DARK THEME

var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "img/sun.png";
  } else {
    icon.src = "img/moon.png";
  }
};
