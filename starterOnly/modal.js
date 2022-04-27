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
const submitForm = document.querySelector(".btn-submit");
const closeBtn = document.querySelector(".close");
//Regex
//const birthDateRegex = ^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$;
const mailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const nameRegex = /(.*[a-z]){2,30}/;
if (nameRegex) { nameRegex = true;
  
  
  } else { nameRegex = false;
  alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }
  if (birthDateRegex) { birthDateRegex = true;
    
    } else { birthDateRegex = false;
    alert("Vous devez entrer votre date de naissance.");
    }
    if (mailRegex) { mailRegex = true;
    
      } else { mailRegex = false;
      alert("Vous devez entrer une adresse email correcte.");
      }
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//close modal
closeBtn.addEventListener("click", closeModal);
// close modal function
function closeModal() {
  modalbg.style.display = "none";
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

}
