/*
# Esercizio 27
 
- Stampa in console tutti i numeri pari da 0 a 20.

Suggerimento: utilizza l'operatore % (modulo) che restituisce il resto di una divisione intera
Es: 10 % 2 --> restituisce 0    perchè 10 / 2 non ha resto
    10 % 4 --> restituisce 2    perchè 10 / 4 ritorna 2 con un resto di 2

https://it.javascript.info/operators per apporofondimenti sugli operatori di base

 */



//--------------------------------------------------------------------

//ASNWER

//this answer is technically correct. 

let n = 0; // let = (variable) n= (variable name) 0 =(variable value) (numerical value of 0)  

for (n = 0 ; n < 22 ; n = n + 2){ //for = (for loop synatax start : for (){}) (variable is 0 ; loop will stop when it reaches a number below 22; loops work is to add 2 to our variable.)
        //(n <= 20 ) this can be writen in this way too. 

    console.log (n); //console.log(n) is to start our terminal without it it wont start 
}

console.log ("these are the even numbers") // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20.
//console.log ("these are the even numbers") is the resault we want to have when the loop is finished.


// right asnwer 

// this is a cleaner and more efficient code. 

for (i = 0; i <= 20; i++){ // for = (for loop synatax start : for (){}) (variable is equal to 0; variable will stop when its lesser of equal to our value "20"; loops job is to add another number to the variable value.)
                //(i = i + 1) this part can be writen in the same way and it will have the same resault.
    if (i % 2 == 0) { //if (is if in if els statement) command = (if our variable is divisble by 2 then procede with the procedure)
                      // you could add an "else" statement here else (i % 3 == 0) console.log("this number is divisible by 3") to see what number are divisble in 3 
        console.log(i);// this is our command to see the resault in the termina.
    };
}
