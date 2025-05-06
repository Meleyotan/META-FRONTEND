let list_target = document.getElementById("list");
let hamburger_target = document.getElementById("hamburger");

window.addEventListener("resize", () => {
  if (window.innerWidth <= 375) {
      list_target.style.display = "none";
      hamburger_target.style.display=""
      hamburger_target.setAttribute("src", "./assets/img/hamburger.png"); // Reset to hamburger icon
  } else {
      list_target.style.display = "inline-flex"; // Or the default display value
      hamburger_target.style.display = "none"
      hamburger_target.setAttribute("src", "./assets/img/hamburger.png"); // Reset to hamburger icon
  }
});

function display_menu() {
  if (
    list_target.style.display === "none" || list_target.style.display === ''
  ) {
      list_target.style.display = "inline-flex";// Show the menu
      hamburger_target.setAttribute('src', './assets/img/cancel_icon.png')//Change hamburger to cancel
  } else {
      list_target.style.display = "none"; // Hide the menu
    hamburger_target.setAttribute('src', './assets/img/hamburger.png')//Change cancel to hamburger
  }
}

hamburger_target.addEventListener("click", display_menu);

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d'); // 2D rendering context
