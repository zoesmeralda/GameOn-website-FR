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
const submitForm = document.querySelectorAll(".btn-submit");

//Regex
//const birthDateRegex = ^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$;
const mailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const nameRegex = /(.*[a-z]){2,30}/;
if (nameRegex) {
  // utiliser les données ici
  } else {
  alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }
  if (birthDateRegex) {
    // utiliser les données ici
    } else {
    alert("Vous devez entrer votre date de naissance.");
    }
    if (mailRegex) {
      // utiliser les données ici
      } else {
      alert("Vous devez entrer une adresse email correcte.");
      }
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//confirm submitForm
submitForm.forEach((btn) => btn.addEventListener("click", confirmSubmit));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//confirmation d'envoi du formulaire
function confirmSubmit () {
  alert("Merci ! Votre réservation a été reçue.");
}


