// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

function authenticate(event) {
  event.preventDefault(); // Prevent navigation
  document.getElementById("authPopup").style.display = "flex";
}

function validateCredentials() {
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();

  var correctUsername = "ayush";
  var correctPassword = "raj";

  if (username === correctUsername && password === correctPassword) {
    document.getElementById("authPopup").style.display = "none";
    window.location.href = "work.html";
  } else {
    document.getElementById("authPopup").style.display = "none";
    alert("You are not authorised!");
  }
}

function closeAuthPopup() {
  document.getElementById("authPopup").style.display = "none";
}