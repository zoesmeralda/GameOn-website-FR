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
const modalbg2 = document.querySelector(".bground2");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const radioBtn = document.querySelectorAll(".checkbox-input");
const submitForm = document.querySelector(".btn-submit");
const closeBtn = document.querySelector(".close");
const email = document.getElementById("email");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");

let rightFirstName;
let rightLastName;
let rightEmail;
let rightDate;
let rightNumber;
let radioChecked;
let CGUChecked;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//close modal
closeBtn.addEventListener("click", closeModal);

// close modal function
function closeModal() {
  modalbg.style.display = "none";
}
//Verification email

function emailVerification(myEmail) {
  rightEmail = true;
  console.log("email check");

  if (myEmail.match(/^[a-zA-Z0-9_+\.]+@[a-zA-Z0-9]+\.[a-z]+$/)) {
    rightEmail = true;
    document.getElementById("formData3").setAttribute("data-error", "false");
    document
      .getElementById("formData3")
      .setAttribute("data-error-visible", "false");
  } else {
    rightEmail = false;
    document
      .getElementById("formData3")
      .setAttribute("data-error", "Veuillez saisir une adresse e-mail valide");
    document
      .getElementById("formData3")
      .setAttribute("data-error-visible", "true");
  }
  return rightEmail;
}

/*function emailVerification() {
	const mailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	return mailRegex.test(email.value);}
*/

// Verification firstname

function firstVerification(firstName) {
  rightFirstName = false;
  if (firstName.length >= 2 && !firstName.match(/^[\d]+$/)) {
    rightFirstName = true;
    document.getElementById("formData1").setAttribute("data-error", "false");
    document
      .getElementById("formData1")
      .setAttribute("data-error-visible", "false");
  } else {
    rightFirstName = false;
    document
      .getElementById("formData1")
      .setAttribute("data-error", "Veuillez saisir un prénom valide");
    document
      .getElementById("formData1")
      .setAttribute("data-error-visible", "true");
  }
  // TODO il faut que tu fasse ce return sur les autres fonctions aussi
  return rightFirstName;
}
/*function firstVerification() {
	let inputValue = firstName.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
}*/

// Verification lastname

function lastVerification(lastName) {
  if (lastName.length >= 2 && !lastName.match(/^[\d]+$/)) {
    rightLastName = true;
    document.getElementById("formData2").setAttribute("data-error", "false");
    document
      .getElementById("formData2")
      .setAttribute("data-error-visible", "false");
  } else {
    rightLastName = false;
    document
      .getElementById("formData2")
      .setAttribute("data-error", "Veuillez saisir un nom valide");
    document
      .getElementById("formData2")
      .setAttribute("data-error-visible", "true");
  }
  return rightLastName;
}
/*function lastVerification() {
	let inputValue = lastName.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
}*/

function birthdateVerification(myDate) {
  const todaysDate = new Date();
  const myBirthDate = Date.parse(myDate);
  if (todaysDate > myBirthDate) {
    rightDate = true;
    document.getElementById("formData4").setAttribute("data-error", "false");
    document
      .getElementById("formData4")
      .setAttribute("data-error-visible", "false");
  } else {
    rightDate = false;
    document
      .getElementById("formData4")
      .setAttribute(
        "data-error",
        "Veuillez saisir une date de naissance valide"
      );
    document
      .getElementById("formData4")
      .setAttribute("data-error-visible", "true");
  }
  return rightDate;
}
/*function validBirthDate() {
  result = true;
    
  var userBirthDate = new Date(document.getElementById("birthdate").value);

  var regexVar = new RegExp("([0-9]{2})\/([0-9]{2})\/([0-9]{4})");
  var regexVarTest = regexVar.test(userBirthDate);


  if (isNaN(userBirthDate)) {
    dobErrMsg.innerHTML = "Veuillez saisir une date de naissance valide";
  } else if (regexVarTest == false) {
    dobErrMsg.innerHTML = "entrer la date au format jj/mm/aaaa";
  } 

  return result;

}*/

function numberVerification(myNumber) {
  if (myNumber === "") {
    rightNumber = false;
    document
      .getElementById("formData5")
      .setAttribute("data-error", "Veuillez saisir un nombre");
    document
      .getElementById("formData5")
      .setAttribute("data-error-visible", "true");
  } else {
    if (Number(myNumber) > -1 && Number(myNumber) < 100) {
      rightNumber = true;
      document.getElementById("formData5").setAttribute("data-error", "false");
      document
        .getElementById("formData5")
        .setAttribute("data-error-visible", "false");
    } else {
      rightNumber = false;
      document
        .getElementById("formData5")
        .setAttribute("data-error", "Veuillez saisir un nombre");
      document
        .getElementById("formData5")
        .setAttribute("data-error-visible", "true");
    }
  }
  return rightNumber;
}

//verif bouton radio

function radio() {
  if (
    location1.checked ||
    location2.checked ||
    location3.checked ||
    location4.checked ||
    location5.checked ||
    location6.checked
  ) {
    radioChecked = true;
    document.getElementById("formData6").setAttribute("data-error", "false");
    document
      .getElementById("formData6")
      .setAttribute("data-error-visible", "false");
  } else {
    radioChecked = false;
    document
      .getElementById("formData6")
      .setAttribute("data-error", "veuillez selectionner au moins 1 option");
    document
      .getElementById("formData6")
      .setAttribute("data-error-visible", "true");
  }
  return radioChecked;
}

/*function radio(radioBtn) {
  
  let messageAlert = window.alert("veuillez selectionner au moins 1 option");
  for (let i = 0; i < radioBtn.options.length; i++) {
    if (radioBtn.checked=false)
  
  
  return messageAlert;
}}*/
//verif condition d'utilisation

function CGU() {
  if (checkbox1.checked) {
    CGUChecked = true;
    document.getElementById("formData7").setAttribute("data-error", "false");
    document
      .getElementById("formData7")
      .setAttribute("data-error-visible", "false");
  } else {
    CGUChecked = false;
    document
      .getElementById("formData7")
      .setAttribute(
        "data-error",
        "veuillez cocher la case pour accepter les CGU"
      );
    document
      .getElementById("formData7")
      .setAttribute("data-error-visible", "true");
  }
  return CGUChecked;
}
/*function CGU(checkboxCgu) {
  
  let messageAlert = window.alert("veuillez cocher la case pour accepter les CGU");
  for (let i = 0; i < checkboxCgu.options.length; i++) {
    if (checkboxCgu.checked=false)
  
  
  return messageAlert;
}}*/

submitForm.addEventListener("click", (e) => {
  confirmSubmit(e);
});

function confirmSubmit(e) {
  e.preventDefault();
  const firstNameData = document.querySelector(".firstname").value;
  firstVerification(firstNameData);
  const lastNameData = document.querySelector(".lastname").value;
  lastVerification(lastNameData);
  const mailData = document.querySelector(".mailaddress").value;
  emailVerification(mailData);
  const dateData = document.querySelector(".dateofbirth").value;
  birthdateVerification(dateData);
  const numberData = document.querySelector(".number").value;
  numberVerification(numberData);
  const radioData = document.querySelectorAll(".checkbox-input").value;
  radio(radioData);
  const CGUData = document.querySelectorAll(".checkbox-input").value;
  CGU(CGUData);

  //confirmation d'envoi du formulaire si conditions remplies et affichage du block de confirmation d'inscription

  // TODO: faire pareil pour les autres fonctions appelées dans le if
  // Regarde dans la fonction firstVerification, j'ai ajouté un return de la valeur (sinon ton if sera toujours vrai)
  console.log("");

  console.log(" firstVerification(firstNameData)" ,    firstVerification(firstNameData)); 
   console.log("lastVerification(lastNameData)", lastVerification(lastNameData));
     console.log(" emailVerification(mailData)",  emailVerification(mailData)); 
      console.log("birthdateVerification(dateData)", birthdateVerification(dateData));
        console.log("numberVerification(numberData)", numberVerification(numberData));
          console.log("numberVerification(numberData)", numberVerification(numberData));
          console.log("CGU(CGUData)", CGU(CGUData));
  if (
    firstVerification(firstNameData) &&
    lastVerification(lastNameData) &&
    emailVerification(mailData) &&
    birthdateVerification(dateData) &&
    numberVerification(numberData) &&
    radio(radioData)&&
    CGU(CGUData)
  ) {
    modalbg2.style.display = "block";
  }
}