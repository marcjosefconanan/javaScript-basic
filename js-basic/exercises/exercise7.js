/*# Esercizio 7

- Esegui la conversione (casting) delle variabili al tipo di dato presente nei commmenti del file exercise.js e stampa il risultato dell'operazione.
- Spiega il casting della variabile `hello`
 */


let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string

//--------------------------------------------------------------------

//ASNWER

console.log(Number(hello)); 

console.log(Boolean(age));

console.log(String(isGraduated));

// since the string variable (hello) with the word Ciao in it, it isn't translatable to a numerical value. there for the aswere JavaScript is giving us is NaN 
//which stands for "Not A Number" which means its an error that that we're trying to convert a non numerical word in to a number. 