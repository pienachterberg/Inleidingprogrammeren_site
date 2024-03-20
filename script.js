console.log("Welkom,")

const naamveld = document.querySelector('#voorNaam')
var buttonElement = document.querySelector("img")

function groet(naam, typeGroet) {
    console.log("groet persoon")
    voorNaam.textContent = "bij het online dagboek!";
}

buttonElement.addEventListener("click", groet);

function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("nameUser").innerHTML = x;
}

let leeftijd = 20
const naam = "Pien"

let toegangsLeefijd = 10
let mijnLeeftijd = 16 
if (mijnLeeftijd >= toegangsLeefijd) {
    console.log("Welkom, je bent oud genoeg!")
} else {
    console.log("Helaas je bent nog niet oud genoeg")
}

let getal = 0;
const plusKnop = document.querySelector('#plus')
const minKnop = document.querySelector('#min')
const getalVeld = document.querySelector('h2')

function updateGetalVeld(nieuw) {
    console.log('nieuw getal:' + nieuw);
    getalVeld.textContent = nieuw;
}

function verhoogGetal() {
    getal = getal + 1;
    updateGetalVeld(getal);
}

function verlaagGetal() {
    getal = getal - 1;
    updateGetalVeld(getal);
}

plusKnop.addEventListener('click',verhoogGetal)
minKnop.addEventListener('click',verlaagGetal)

verhoogGetal();
verlaagGetal();



