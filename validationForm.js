//alert("js est activé !");
//pour la validation du formulaire on doit récupérer le formulaire ainsi que ses elements
let form = document.querySelector("form");
// console.log(form);
let pseudo = document.querySelector("#pseudo");
// console.log(pseudo);
let email = document.querySelector("#email");
let password = document.querySelector("#password");

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
  let regexEmail = /^[a-z0-9.%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  let regexPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  //on teste le pseudo
  if (vPseudo.length < 5 || vPseudo.length > 15) {
    document.querySelector("#pseudoError").classList.remove("d-none");
    document.querySelector(".iconeX").classList.remove("d-none");
    document
      .querySelector(".iconePseudo")
      .classList.replace("bi-check", "bi-x");
    //document.querySelector(".iconePseudo").classList.add("text-danger");  //ajout du croix rouge
  } else {
    document.querySelector(".iconeX").classList.replace("bi-x", "bi-check");
    document.querySelector(".iconeX").classList.remove("d-none");
    document
      .querySelector(".iconeX")
      .classList.replace("text-danger", "text-success");
  }

  //on teste le email
  if (!regexEmail.test(vEmail)) {
    document.querySelector("#emailErrors").classList.remove("d-none");
    document.querySelector(".iconeX").classList.remove("d-none");
    document.querySelector(".iconeX").classList.replace("bi-check", "bi-x");
  } else {
    document.querySelector(".iconeX").classList.remove("d-none");
    document.querySelector(".iconeX").classList.replace("bi-x", "bi-check");
    document.querySelector(".iconeX").style.color = "green";
  }

  //on teste le mot de passe
  if (!regexPassword.test(valuePassword)) {
    document.querySelector("#passwordError").classList.remove("d-none");
  } else {
  }
});

//---- on click sur le croix rouge ça disparait
