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
const dob = document.getElementById("birthdate");
const checkbox1 = document.getElementById("location1");
const checkbox2 = document.getElementById("location2");
const checkbox3 = document.getElementById("location3");
const checkbox4 = document.getElementById("location4");
const checkbox5 = document.getElementById("location5");
const checkbox6 = document.getElementById("location6");
const checkboxCgu = document.getElementById("checkbox2-label");
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

function validBirthDate() {
  result = true;
    
  var userBirthDate = new Date(document.getElementById("birthdate").value);

  var regexVar = new RegExp("([0-9]{2})\/([0-9]{2})\/([0-9]{4})");
  var regexVarTest = regexVar.test(userBirthDate);


  if (isNaN(userBirthDate)) {
    dobErrMsg.innerHTML = "la date de naissance doit être un chiffre";
  } else if (regexVarTest == false) {
    dobErrMsg.innerHTML = "entrer la date au format jj/mm/aaaa";
  } 

  return result;

}
//verif bouton radio

function radio(radioBtn) {
  
  let messageAlert = window.alert("veuillez selectionner au moins 1 option");
  for (let i = 0; i < radioBtn.options.length; i++) {
    if (radioBtn.checked=false)
  
  
  return messageAlert;
}}
//verif condition d'utilisation
function CGU(checkboxCgu) {
  
  let messageAlert = window.alert("veuillez cocher la case pour accepter les CGU");
  for (let i = 0; i < checkboxCgu.options.length; i++) {
    if (checkboxCgu.checked=false)
  
  
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


