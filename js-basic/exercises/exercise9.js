/*# Esercizio 9

- Scrivi il risultato delle comparazioni tra variabili.
 */

const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

name == lastname
age <= average
firstYearCompleted == lastname
yearsCompleted == firstYearCompleted
firstYearCompleted === yearsCompleted
examsCompleted < age
isGraduated > yearsCompleted

//--------------------------------------------------------------------

//ASNWER

//it's false because their not the same word. string value will only show true if their the same word.
console.log (name == lastname); 

//it's true because  age numerical value is 27 and average numerical value is 27 and this symbol "<=" means age is less or equal to average . and their equal in numerical value so its true.
console.log (age <= average); 

//it's false because firstYearCompleted boolean value true and lastname string value Rossi arent compatible so its false unlike if the string value were the word true.
console.log (firstYearCompleted == lastname);

//it's true because yearsCompleted 1 and firstYearCompleted true aka (true is = 1 in numerical value) so by using this "==" javascript will adjust its data type to have an aswere.
console.log (yearsCompleted == firstYearCompleted);

//it's false becasue firstYearCompleted value is boolean true and yearsCompleted value is 1 with this "===" if their not the same value or the same data type it will always be false.
console.log (firstYearCompleted === yearsCompleted);

//it's true because examCompleated has the numercial value of 10 and 27 is the numerical value of age. aka 27 is greater than 10.
console.log (examsCompleted < age);

//it's false because isGraduated has the boolean value of false. false has the numerical value of 0 and yearsCompleted has the numerical value of 1.
console.log (isGraduated > yearsCompleted);
