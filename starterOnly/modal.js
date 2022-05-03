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
const formData = document.querySelectorAll(".formData");
const radioBtn = document.querySelectorAll(".checkbox-input");
const submitForm = document.querySelector(".btn-submit");
const closeBtn = document.querySelector(".close");
//Regex

const mailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const nameRegex = /(.*[a-z]){2,30}/;

const matchRegex = formData.match(mailRegex,nameRegex);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//verif bouton radio

function radio(radioBtn) {
  let radioBtn = 0;
  let messageAlert = window.alert("veuillez selectionner au moins 1 bouton");
  for (let i = 0; i < radioBtnn.options.length; i++) {
    if (radioBtn = 0)
  }
  return messageAlert;
}
//close modal
closeBtn.addEventListener("click", closeModal);
//confirm submitForm
submitForm.addEventListener("click", confirmSubmit);

// close modal function
function closeModal() {
  modalbg.style.display = "none";
}
//confirmation d'envoi du formulaire
function confirmSubmit () {
  console.log("confirmSubmit");
  window.alert("Merci ! Votre réservation a été reçue.");
}


