/*# Esercizio 10

- Spiega la differenza tra: 

yearsCompleted == firstYearCompleted
firstYearCompleted === yearsCompleted */

const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted
yearsCompleted === firstYearCompleted

//--------------------------------------------------------------------

//ASNWER

console.log (yearsCompleted == firstYearCompleted); //true
console.log (yearsCompleted === firstYearCompleted); //false 

// the main differece here is this "==" and "==="
// with using "==" in a comparison javascript makes adjustments so that it can give a proper boolean aswere to this problem and since the boolean value of 'true'
// it 1 and yearsCompleted value is 1 it is ideed equal so the boolean value is indeed true. 

//on the other hand by using "===" the absolute equality there's no leeway and if their not of the same numerical, boolean or string value they are not eaqul 
// so by having different values they are not equals 