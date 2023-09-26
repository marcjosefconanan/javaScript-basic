/*
# Esercizio 47

Abbiamo il nostro array di nomi, dobbiamo svolgere le seguenti operazioni:

- Rimuovere il nome "Giovanni" dal nostro array
- Aggiungere il nome "Pippo" alla coda del nostro array
- Aggiungere il nome "Giovanni" come primo elemento del nostro array

Dopo ogni operazione inserire il console.log() del nostro array `names`

Indicazioni utili:

- Sei hai qualche dubbio, qui trovi tutti i metodi che abbiamo per lavorare con gli array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

*/

//--------------------------------------------------------------------

//ASNWER

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

console.log ("pop: " + names.pop()); // pop : Giovanni

console.log (names.push("Pippo"));// 4

console.log(names); //[ 'Luca', 'Marco', 'Vittorio', 'Pippo' 

names.unshift ("Giovanni"); //[ 'Giovanni', 'Luca', 'Marco', 'Vittorio', 'Pippo' ]




