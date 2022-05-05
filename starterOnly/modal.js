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
const email = document.getElementById("email");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block"

}
//Verification email
function emailVerification() {
	const mailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	return mailRegex.test(email.value);}

  
// Verification firstname
function firstVerification() {
	let inputValue = firstName.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
}

// Verification lastname
function lastVerification() {
	let inputValue = lastName.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
}
//verif bouton radio

function radio(radioB) {
  let radioBn = 0;
  let messageAlert = window.alert("veuillez selectionner au moins 1 bouton");
  for (let i = 0; i < radioBn.options.length; i++) {
    if (radioB > 1)
  
  
  return messageAlert;
}}
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


