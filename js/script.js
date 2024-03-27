// Chiedo all'utente il numero di chilometri e l'età del passeggero
let km = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));
console.log("Kilometri inseriti:", km, "Km");

let age = parseInt(prompt("Inserisci la tua età:"));
console.log("Eta' inserita:", age);

// calcolo il prezzo del biglietto (0.21 € al km)
let regularPrice = km * 0.21;

// Applico gli sconti in base all'età
let discount = 0;
if (age < 18) {
    discount = 0.2; // 20% di sconto per i minorenni
    console.log("Minorenne! Applicato sconto del 20%");
} else if (age >= 65) {
    discount = 0.4; // 40% di sconto per gli over 65
    console.log("Vecchietto individuato! Applicato sconto del 40%");
}
// NON ho inserito un else, perché non viene applicato nessuno sconto

// Calcolo il prezzo finale applicando lo sconto
let finalPrice = regularPrice * (1 - discount);

// Formatto il prezzo finale con massimo due decimali
finalPrice = finalPrice.toFixed(2);

// Stampo il risultato sulla pagina HTML
document.getElementById("finalPrice").innerHTML = finalPrice;
console.log("Il prezzo del biglietto è:", finalPrice, "€");
