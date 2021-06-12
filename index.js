let errorMessages = {
    firstName : "Veuillez entrer 2 caractères ou plus pour le champ du prénom",
    lastName : "Veuillez entrer 2 caractères ou plus pour le champ du nom",
    email: "Veuillez entrer une adresse email valide",
    quantity : "Veuillez entrer un nombre de concours auxquels vous avez participé",
    location :"Veuillez sélectionner une ville",
    conditions : "Veuillez accepter les conditions"
}

// firstName validation
function checkFirstName(){
    if(/\w{2,}/.test(document.getElementById('first-name').value)){
        document.getElementById('first-name-validation').innerText = "";

    }else{
        document.getElementById('first-name-validation').innerText = errorMessages.firstName;
    }
}

// lastName validation
function checkLastName(){
    if(/\w{2,}/.test(document.getElementById('last-name').value)){
        document.getElementById('last-name-validation').innerText = "";

    }else{
        document.getElementById('last-name-validation').innerText = errorMessages.lastName;
    }
}

//email validation
function checkEmail(){
    let mailRegExp = new RegExp("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")
    if(mailRegExp.test(document.getElementById('email').value)){
        document.getElementById('email-validation').innerText = "";
    }else{
        console.log('ok')
        document.getElementById('email-validation').innerText = errorMessages.email;
    }
}

function onSubmit(e){
    e.preventDefault();
    checkFirstName();
    checkLastName();
    checkEmail();
}

document.getElementById('modal-form').addEventListener("submit", onSubmit)



