/*
# Esercizio 35

Sistemare la funzione in modo tale che non prendiamo errori in console. Inoltre spiegare brevemente come mai al momento la funzione è sbagliata.

Indicazioni utili:

- fate attenzione allo scope delle variabili

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


/*
function canPlay() {
  let sport = " Football";

  if (true) {
    let personName = "Cosimo";
  }

  console.log(personName + sport);
}

canPlay();

*/

// this ship doesnt work cuz "let printName = sayHelloName("cosimo")" this syntax is not in the the function scoppeeeee !!!!!!! and fucntion scopes only affect their scopee
// so if we put it it it should work.

//ASNWER

function canPlay() {
  let sport = " Football";

  if (true) {
    let personName = "Cosimo";

    console.log(personName + sport);
  }

 
}

canPlay();