// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// Saat diklik
document.querySelector("#hamburger-menu").onclick = () =>
  navbarNav.classList.toggle("active");

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class acive untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-btn").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Saat diklik
document.querySelector("#hamburger-menu").onclick = () =>
  navbarNav.classList.toggle("active");

// Klik di luar elemen
const hamburger = document.querySelector("#hamburger-menu");
const searchBtn = document.querySelector("#search-btn");
const shoppingCartBtn = document.querySelector("#shopping-cart-btn");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!shoppingCartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailBtns = document.querySelectorAll(".item-detail-btn");

itemDetailBtns.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close modal
const closeModal = document.querySelector(".modal .close-icon");
closeModal.onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Close di luar elemen
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
