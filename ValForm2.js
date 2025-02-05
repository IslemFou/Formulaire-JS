// alert('js est lié !');

//le formulaire
form = document.querySelector("form");
console.log(form);

//les inputs
let pseudo = document.getElementById("pseudo");
console.log(pseudo);
let email = document.getElementById("email");
console.log(email);
let passw = document.getElementById("password");
console.log(passw);

//les icones
let iconeX = document.querySelector(".iconeX");
console.log(iconeX);

let iconeXEmail = document.querySelector(".iconeXEmail");
console.log(iconeXEmail);

let eyeIcon = document.querySelector(".iconeMdp");
console.log(eyeIcon);



//application de l'evenement addEventlistener()

form.addEventListener("submit", function(event)
{
    event.preventDefault();
    //console.log(event.target[0].value); --> la valeur de la première input

    //création de variables qui stocke la valeur des inputs
    let vPseudo = pseudo.value.trim();
    let vEmail = email.value.trim();
    let vPassw = passw.value.trim();
    //regex
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    
    //on teste le pseudo
    if ( vPseudo.length < 5 || vPseudo.length > 20 )
    { //autre manière 
        let p = document.createElement("p");
        p.textContent = "* Ce champ n'est pas valide";
        p.id = "errormsg";
        //ajout de la classe error
        p.setAttribute('class','error');
        document.querySelector(".position").append(p);
        iconeX.classList.remove("d-none");
        // document.classList.replace("bi-check","bi-x");
    } else
    {
        iconeX.classList.replace("bi-x", "bi-check");
        iconeX.classList.replace("text-danger", "text-success");
       iconeX.classList.remove("d-none");
    }

    // on teste l'email
    if (!regexEmail.test(vEmail))
    {
        let p = document.createElement("p");
        p.textContent = "* Ce champs n'est pas valide";
        p.id = "errormsg";
        //ajout de la classe error
        p.setAttribute('class','error');
        document.querySelector(".positionEmail").append(p);
    } else
    {
        document.querySelector(".iconeXemail").classList.replace("bi-x", "bi-check");
        document.querySelector(".iconeXemail").classList.replace("text-danger", "text-success");
       // pseudo.style.backgroundColor = "green";
       document.querySelector(".iconeXemail").classList.remove("d-none");
    }


    //tester le mot de passe
    if (!regexPassword.test(vPassw))
    {
        let p = document.createElement("p");
        p.textContent = "* Ce champs n'est pas valide";
        p.id = "errormsg";
        //ajout de la classe error
        p.setAttribute('class','error');
        document.querySelector(".positionP").append(p);
    } else
    {
        document.querySelector(".iconeMdp").classList.replace("bi-x", "bi-check");
        document.querySelector(".iconeMdp").classList.replace("text-danger", "text-success");
       document.querySelector(".iconeMdp").classList.remove("d-none");
    }

});


