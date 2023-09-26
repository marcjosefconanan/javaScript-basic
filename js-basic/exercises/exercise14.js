/*
# Esercizio 14

- Inserisci i corretti operatori logici per ottenere il risultato richiesto

const question1 = 101 < 67;
const question2 = 1 == true;
const question3 = true != 1
const question4 = 4 <= 4

console.log(question1 ... question2) //il risultato deve essere true
console.log(question1 ... question2) //il risultato deve essere false
console.log(question3 ... question2) //il risultato deve essere true
console.log(question4 ... question4) //il risultato deve essere false
console.log(question2 ... question4) //il risultato deve essere false
 */

//--------------------------------------------------------------------

//ASNWER

const question1 = 101 < 67; //false cuz 67 is not greater than 101
const question2 = 1 == true; //true cuz the numerical value of true is 1 
const question3 = true != 1; //false cuz true and 1 have the same numerical value 
const question4 = 4 <= 4; //true cuz 4 is indeed equal or less then 4. 

console.log(question1 || question2); //il risultato deve essere true (the result is true cuz in || false = true = true)
console.log(question1 && question2); //il risultato deve essere false (the result is false cuz in && false = true = false)
console.log(question3 || question2);//il risultato deve essere true (the result is true cuz in || false = true = true)

console.log(question4 !== question4); //il risultato deve essere false (the result is false cuz they are indeed both true and this "!==" means that they are not equal)
console.log(question2 != question4); //il risultato deve essere false(the result is false same thing here. )

//or another aswere could be this:
console.log(question4 &&! question4);
console.log(question2 &&! question4); //its basically the same thing it says that the resoult that should have been true to false 

