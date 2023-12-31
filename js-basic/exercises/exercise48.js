/*
# Esercizio 48

Abbiamo il nostro array di nomi, questa volta vogliamo stampare i nostri nomi in modo diverso, dopo ogni nome deve esserci un trattino al posto della virgola, sapresti risolvere questo problema?

Indicazioni utili:

- Il risultato dovrà essere questo: Luca-Marco-Vittorio-Giovanni
- Sei hai qualche dubbio, qui trovi tutti i metodi che abbiamo per lavorare con gli array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

*/

//--------------------------------------------------------------------

//ASNWER

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

console.log(names.join("-"))

//you could also write it this way bu the aswere is the same here.

/*
const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

const newNames = names.join();

console.log(newNames);

*/