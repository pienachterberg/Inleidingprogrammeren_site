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

let getal = 1;
const plusKnop = document.querySelector('#plus')
const minKnop = document.querySelector('#min')
const getalVeld = document.querySelector('h2')
let teHoogGetal = document.querySelector('#teHoog')

function updateGetalVeld(nieuw) {
    console.log('nieuw getal:' + nieuw);
    getalVeld.textContent = nieuw;
}

function verhoogGetal() {
    getal = getal + 1;
    if (getal > 10) {
        teHoogGetal.textContent = 'Te hoog, verminder het cijfer'
        updateGetalVeld('');
    }
    else {
        updateGetalVeld(getal)
    }
}

function verlaagGetal() {
    getal = getal - 1;
    updateGetalVeld(getal);
}

plusKnop.addEventListener('click',verhoogGetal)
minKnop.addEventListener('click',verlaagGetal)

verlaagGetal();

let textElement1 = document.querySelector("#textTip1")
let textElement2 = document.querySelector("#textTip2")
let textElement3 = document.querySelector("#textTip3")
let textElement4 = document.querySelector("#textTip4")
let textElement5 = document.querySelector("#textTip5")
let textElement6 = document.querySelector("#textTip6")

function veranderTextTip1() {
    textElement1.textContent = "Fijn! Wat heeft ervoor gezorgd dat je je gelukkig voelt?";
}
function veranderTextTip2() {
    textElement2.textContent = "Schrijf je gevoelens op of ga sporten om je hoofd ervanaf te zetten";
}
function veranderTextTip3() {
    textElement3.textContent = "Praat erover met mensen die je vertrouwd en ga iets leuks doen.";
}
function veranderTextTip4() {
    textElement4.textContent = "Praat er met anderen over of met degene waar je boos op bent";
}
function veranderTextTip5() {
    textElement5.textContent = "Angst kan verminderen door rustig te ademen met yoga, meditatie of ontspanningsoefeningen.";
}
function veranderTextTip6() {
    textElement6.textContent = "Zorg dat je optijd slaapt, genoeg eet en voldoende sport (bouw evt. een routine op)";
}

textElement1.addEventListener("click",veranderTextTip1);
textElement2.addEventListener("click",veranderTextTip2);
textElement3.addEventListener("click",veranderTextTip3);
textElement4.addEventListener("click",veranderTextTip4);
textElement5.addEventListener("click",veranderTextTip5);
textElement6.addEventListener("click",veranderTextTip6);

function myStory() {
    var x = document.getElementById("myownText").value;
    document.getElementById("nameUser").innerHTML = x;
}

