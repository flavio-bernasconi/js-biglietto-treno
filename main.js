// Richiesta: Il programma dovrà chiedere all’utente il numero di
// chilometri e l’età e dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
// ma c’è uno sconto del 20% per i minorenni e del 40% per gli over 65.

// elementi di pagina dove stampo risultati
var elemento = document.getElementById("mio_id");
var par = document.getElementById("par");
// variabili iniziali
var eta, chilometri, costoFisso, prezzo, costoMinori, costoOver;

// variabili immesse dall'utente
eta = prompt("Quanti anni hai?");
console.log(eta);

chilometri = prompt('Quanti chilometri devi fare?');
console.log(chilometri);


// variabili del costo  in base all'età
// costo fisso
costoFisso = 0.21;

// costo minori
costoMinori = costoFisso - ((0.21 / 100)*20);
console.log(costoMinori);

// costo over 65
costoOver = costoFisso - ((0.21 / 100)*40);
console.log(costoOver);


// se l'eta è minore di 18 usa la variabile di costo per minorenni
// ovvero costoMinori e stampa la parola minorenne per debug
if (eta < 18 ) {
  prezzo = costoMinori * chilometri;
  par.innerHTML = 'minorenne';
}
// se l'eta è superiore di 65 usa la variabile di costo per over
// ovvero costoOver e stampa la parola over 65 per debug
else if (eta > 65 ) {
  prezzo = costoOver * chilometri;
  par.innerHTML = 'over 65';
}
// altrimenti se non rientra nei paremetri sopra stabiliti usa il costo fisso per calcolare il costo
// e stampa adulto come debug
else{
  prezzo = chilometri * costoFisso;
  par.innerHTML = 'adulto';
}




// toFixed serve per stambare solo un certo numero di cifre dopo
// la virgola a me ne servono 2 per i centesimi
// (https://www.w3schools.com/jsref/jsref_tofixed.asp)
var prezzoFinale = prezzo.toFixed(2);
// stampa il prezzo finale sulla pagina
elemento.innerHTML = 'Il costo del biglietto sarà ' + prezzoFinale + ' euro';



//
