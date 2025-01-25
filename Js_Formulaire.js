// alert("Js est activé ! ");
// Pour la validation du formulaire, on utilise le addEventListener()
// On récupère tout le formulaire ainsi que ses elements

let myForm = document.querySelector("form");
// console.log(myForm);
let inputPseudo = document.querySelector("#pseudo");
// console.log(inputPseudo);
let inputEmail = document.querySelector("#email");
// console.log(inputEmail);
let inputPassword = document.querySelector("#password");
// console.log(inputPassword);

//Appliquer la méthode addEventListener(
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //   console.log(event.target[0].value); // la valeur du pseudo
  // Ce qui nous intéresse ici sont les valeurs saisie sur le champ
  //on craie des variables qui vont stocker les valeurs des elements
  let valuePseudo = inputPseudo.value.trim();
  //   console.log(valuePseudo.length);
  let lengthPseudo = valuePseudo.length;
  let valueEmail = inputEmail.value.trim();
  //   console.log(valueEmail);
  let valuePassword = inputPassword.value.trim();
  //   console.log(valuePassword);

  //   Déclaration d'un regex
  let regexmail = /^[a-z0-9.%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  let regexmdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.\d)(?=.*[#$^+=!*()@%&].{8,10})$/;

  //---- On traite le pseudo
  if (lengthPseudo < 5 || lengthPseudo > 15) {
    //on saisie la condition du faux
    //alert("Entrer un pseudo valide");
    document.querySelector("#pseudoError").classList.remove("d-none");
    document.querySelector(".iconeX").classList.remove("d-none");
    document.querySelector(".iconeX").style.color = "red";
  } else {
    document.querySelector(".iconeX").classList.remove("d-none");
    // document.querySelector("#pseudoError").classList.add("d-none");
    document.querySelector(".iconeX").classList.replace("bi-x", "bi-check");
    document.querySelector(".iconeX").style.color = "green";
  }

  //---- on teste le email, on utilise les regex
  if (!regexmail.test(valueEmail)) {
    //on commence par la condition fausse
    document.querySelector("#emailError").classList.add("error");
    document.querySelector("#emailError").classList.remove("d-none");
    // document.querySelector("#emailError").style.color =
  } else {
    document.querySelector(".iconeX").classList.replace("bi-x", "bi-check");
    document.querySelector(".iconeX").style.color = "green";
    document.querySelector(".iconeX").classList.remove("d-none");
  }

  //tester le mot de passe
  if (!regexmdp.test(valuePassword)) {
    //on commence par la condition fausse
    document.querySelector("#passwordError").classList.add("error");
    document.querySelector("#passwordError").classList.remove("d-none");
  } else {
    document.querySelector("").classList.add("bi-check");
    document.querySelector("").style.color = "green";
    document.querySelector("").classList.remove("d-none");
  }
});

//******************* */

/* 1- Ajout d'une icone eye importé de bootstrap
     2- en CSS, mettre l'icone en position absolute et le parent (div) en position relative
  */
//création de l'id showPassword et création d'une variable
let showPassword = document.querySelector("#showPassword");
showPassword.addEventListener("click", () => {
  //on teste le password
  if (inputPassword.type == "password") {
    inputPassword.type = "text";
    showPassword.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  } else {
    inputPassword.type = "password";
    showPassword.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  }
});
