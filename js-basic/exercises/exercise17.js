/*
# Esercizio 17

- Trasforma l'operatore ternario dell'esercizio 15 in un costrutto `if else`

let age = 15;

age >= 18 ? console.log (`You can drive a car`) : console.log (`You are too young to drive`);

 */




//--------------------------------------------------------------------

//ASNWER

/*
let age = 15;
let youCanDrive = age >= 18;
let youCantDrive = age => 18;

if(youCanDrive && youCantDrive){

    str = "You can drive a car"
}else{

    str = "You are too young to drive"
};

console.log (str);

*/

//a simpler answere could be: 

let age = 15;

if(age >= 15 ){

    console.log (`You can drive a car`);
    
}else (`You are too young to drive`);



// in this part "if ()" you always have to put in the thing that you want to verify.
// in here "{}" you always want to put the result u want to happen if its true or false.
