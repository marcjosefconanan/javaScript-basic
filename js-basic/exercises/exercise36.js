/*
# Esercizio 36

Partendo dal codice, vogliamo che la variabile sport sia una variabile 'globale', quale definizione possiamo adottare?.

Indicazioni utili:

- La funzione deve compilare correttamente

function canPlay() {
  let sport = " Football";

  if (true) {
    let personName = "Cosimo";
  }

  console.log(personName + sport);
}

canPlay();
*/

//--------------------------------------------------------------------

//ASNWER

// this is my aswnwere its wrong dunno why

/*

let sport = " Football";

  console.log(sport);
  if (true) {

    console.log(sport)
}

function canPlay() {
  let sport = " Football";

  if (true) {
    let personName = "Cosimo";

    console.log(personName + sport);
  }

}
canPlay();

*/

//ANSWER 
//the aswere is this apparently 


function canPlay() {
  var sport = " Football";

  if (true) {
    let personName = "Cosimo";

    console.log(personName + sport);
  }

}
canPlay();

//i just change "let" to "var"


