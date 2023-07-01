// MENU
const toolsLink = document.getElementById("toolsLink");
const subMenu = document.getElementById("subMenu");

// Add a click event listener to the document
document.addEventListener("click", function(event) {
  // If the click is not on the "Tools" link or inside the submenu, hide the submenu
  if (event.target !== toolsLink && !subMenu.contains(event.target)) {
    subMenu.style.display = "none";
  }
});

// Add a click event listener to the "Tools" link
toolsLink.addEventListener("click", function(event) {
  event.preventDefault();
  subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
});

// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
