let errorMessages = {
    firstName : "Veuillez entrer 2 caractères ou plus pour le champ du prénom",
    lastName : "Veuillez entrer 2 caractères ou plus pour le champ du nom",
    email: "Veuillez entrer une adresse email valide",
    quantity : "Veuillez entrer un nombre valide de concours auxquels vous avez participé",
    location :"Veuillez sélectionner une ville",
    conditions : "Veuillez accepter les conditions"
}

let formValid = false;

// firstName validation
function checkFirstName(){
    if(/\w{2,}/.test(document.getElementById('first-name').value)){
        document.getElementById('first-name-validation').innerText = "";
        formValid = true;

    }else{
        document.getElementById('first-name-validation').innerText = errorMessages.firstName;
        formValid = false;
    }
}

// lastName validation
function checkLastName(){
    if(/\w{2,}/.test(document.getElementById('last-name').value)){
        document.getElementById('last-name-validation').innerText = "";
        formValid = true;

    }else{
        document.getElementById('last-name-validation').innerText = errorMessages.lastName;
        formValid = false;
    }
}

//email validation
function checkEmail(){
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)$/.test(document.getElementById('email').value)){
        document.getElementById('email-validation').innerText = "";
        formValid = true;
    }else{
        document.getElementById('email-validation').innerText = errorMessages.email;
        formValid = false
    }
}

//quantity validation
function checkQuantity(){
    if(/^[0-9]+$/.test(document.getElementById('quantity').value)){
        document.getElementById('quantity-validation').innerText = "";
        formValid = true;
    }else{
        document.getElementById('quantity-validation').innerText = errorMessages.quantity;
        formValid = false;
    }
}

// location validation
function checkLocation(){
    let valid = false;
    let locations = document.getElementsByName('location');
    for( let location of locations){
        if(location.checked){
            valid = true;
        }
    }
    if(valid){
        document.getElementById('location-validation').innerText = "";
        formValid = true;
    }else{
        document.getElementById('location-validation').innerText = errorMessages.location;
        formValid = false;
    }
}

// conditions validation
function checkConditions(){
    document.getElementById('checkbox1').checked ? (document.getElementById('conditions-validation').innerText = "") : document.getElementById('conditions-validation').innerText = errorMessages.conditions;
    if(document.getElementById('checkbox1').checked){
        document.getElementById('conditions-validation').innerText = "";
        formValid = true
    }else{
        formValid = false;
    }
}

function onSubmit(e){
    e.preventDefault();
    checkFirstName();
    checkLastName();
    checkEmail();
    checkQuantity();
    checkLocation();
    checkConditions();
    if(formValid){
        document.getElementById('form-confirmation').innerText = "Merci ! Votre réservation a été reçue.";
    }else{
        document.getElementById('form-confirmation').innerText = "";

    }
}

document.getElementById('modal-form').addEventListener("submit", onSubmit)



