/*
# Esercizio 33

Partendo dal codice, trasformate la funzione in un arrow function.

Indicazioni utili:

- Il risultato deve essere invariato

function sum() {
  return 5 + 5;
}

console.log(sum());

*/

//--------------------------------------------------------------------


function sum1() {
  return 5 + 5;
}

console.log(sum1());

//ASNWER

let sum2 = () => 5+5;

console.log(sum2());

// or 

let sum3 = () =>{

  5+5
}
console.log(sum3());