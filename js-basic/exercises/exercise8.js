/*# Esercizio 8

- Crea una variabile e assegnale come valore `true`;
- Stampa il suo valore in console e il tipo di dato;
- Esegui il casting a number e stampa nuovamente il valore e il tipo.
- Esegui il casting a string e stampa nuovamente il valore e il tipo.
- Infine esegui il casting a boolean e stampa nuovamente il valore e il tipo. */

//--------------------------------------------------------------------

//ASNWER

let dataType = 'true'; 

console.log(dataType);
console.log(typeof dataType);

dataType =Number (dataType);

console.log(dataType);
console.log(typeof dataType);

dataType =String (dataType);

console.log(dataType);
console.log(typeof dataType);

dataType =Boolean (dataType);

console.log(dataType);
console.log(typeof dataType);

//dataType is the variable name with the string value of "true"

//console.log(dataType) will identify what data is "dataType" which in the first scenario is "true"

//console.log(typeof dataType) will identify what kind of data it is which will be string. 

//and so on and so forth. 