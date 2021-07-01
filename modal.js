function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".content .close");

const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
document.getElementById('confirmation-close').addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  document.querySelector("#modal-form").style.display = "inherit";
  document.querySelector("#form-confirmation").style.display = "none";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  document.querySelectorAll('.form-validation').forEach((element) => {
    element.innerText = "";
  });
}
