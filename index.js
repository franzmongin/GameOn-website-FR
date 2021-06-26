let errorMessages = {
    "first-name" : "Veuillez entrer 2 caractères ou plus pour le champ du prénom",
    "last-name" : "Veuillez entrer 2 caractères ou plus pour le champ du nom",
    "email": "Veuillez entrer une adresse email valide",
    "quantity" : "Veuillez entrer un nombre valide de concours auxquels vous avez participé",
    "location" :"Veuillez sélectionner une ville",
    "conditions" : "Veuillez accepter les conditions"
}

let fieldRegexs = {
    "first-name" : "\\w{2,}",
    "last-name" : "\\w{2,}",
    "email": "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)$",
    "quantity" : "^[0-9]+$",
}

let formValidationsResults = [];
let formValid = true;

// check field which has regex
function fieldValidation(fieldName){
    let regex = new RegExp(fieldRegexs[fieldName]);
    if(regex.test(document.getElementById(fieldName).value)){
        document.getElementById(fieldName+'-validation').innerText = "";
        formValidationsResults[fieldName] = true;
    }else{
        document.getElementById(fieldName+'-validation').innerText = errorMessages[fieldName];
        formValidationsResults[fieldName] = false;
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
        formValidationsResults['location'] = true;
    }else{
        document.getElementById('location-validation').innerText = errorMessages.location;
        formValidationsResults['location'] = false;
    }
}

// conditions validation
function checkConditions(){
    document.getElementById('checkbox1').checked ? (document.getElementById('conditions-validation').innerText = "") : document.getElementById('conditions-validation').innerText = errorMessages.conditions;
    if(document.getElementById('checkbox1').checked){
        document.getElementById('conditions-validation').innerText = "";
        formValidationsResults['conditions'] = true;
    }else{
        formValidationsResults['conditions'] = false;
    }
}

// fonction appelée lors du submit du formulaire
function onSubmit(e){
    formValid = true;
    e.preventDefault();
    fieldValidation('first-name');
    fieldValidation('last-name');
    fieldValidation('email');
    fieldValidation('quantity');
    checkLocation();
    checkConditions();
    for (const [key, value] of Object.entries(formValidationsResults)) {
        if(value === false){
            formValid = false;
        }
    }
    if(formValid){
        document.querySelector("#modal-form").style.display = "none";
        document.querySelector("#form-confirmation").style.display = "flex";
    }
}

document.getElementById('modal-form').addEventListener("submit", onSubmit)



