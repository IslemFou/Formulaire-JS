//alert("js est activé !");
//pour la validation du formulaire on doit récupérer le formulaire ainsi que ses elements
let form = document.querySelector("form");
// console.log(form);
let pseudo = document.querySelector("#pseudo");
// console.log(pseudo);
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let xIcon = document.querySelector(".iconeX");
let xIconEmail = document.querySelector(".iconeXEmail");
let eyeIcon = document.querySelector(".iconeMdp");

//application de l'evenement addEventListener()

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   console.log(event.target[0].value);

  //Création de variables afin de stocker les values des inputs
  let vPseudo = pseudo.value.trim();
  //   console.log(vPseudo);
  let vEmail = email.value.trim();
  let valuePassword = password.value.trim();

  // regex
  // let regexEmail = /^[a-z0-9.%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  let regexEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  let regexPassword =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

  //on teste le pseudo
  if (vPseudo.length < 5 || vPseudo.length > 15) {
    document.querySelector("#pseudoError").classList.remove("d-none");
    xIcon.classList.remove("d-none");
    document
      .querySelector(".iconePseudo")
      .classList.replace("bi-check", "bi-x");
    //document.querySelector(".iconePseudo").classList.add("text-danger");  //ajout du croix rouge
  } else {
    document.querySelector("#pseudoError").classList.add("d-none");
    xIcon.classList.replace("bi-x", "bi-check");
    xIcon.classList.remove("d-none");
    xIcon.classList.replace("text-danger", "text-success");
  }

  //on teste le email
  if (!regexEmail.test(vEmail)) {
    document.querySelector("#emailError").classList.remove("d-none");
    xIconEmail.classList.remove("d-none");
    xIconEmail.style.color = "red";
  } else {
    document.querySelector("#emailError").classList.add("d-none");
    xIconEmail.classList.remove("d-none");
    xIconEmail.classList.replace("bi-x", "bi-check");
    xIconEmail.style.color = "green";
  }

  //on teste le mot de passe
  if (!regexPassword.test(valuePassword)) {
    document.querySelector("#passwordError").classList.remove("d-none");
  } else {
    document.querySelector("#passwordError").classList.add("d-none");
  }
});

//---- on click sur l'oeil pour afficher le mot de passe en clair et inversement pour le masquer
eyeIcon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    eyeIcon.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  } else {
    password.type = "password";
    eyeIcon.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  }
});
