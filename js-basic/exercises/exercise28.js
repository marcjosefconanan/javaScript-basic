/*
# Esercizio 28

- Usa un ciclo for per stampare in console tutti i numeri da 0 a 10 e poi la loro somma.

Il risultato dovrà essere:
0
1
2
3
4
5
6
7
8
9
10
55

 */



//--------------------------------------------------------------------

//ASNWER

let addedUp = 0; // let = (variable syntax) addedUp = (varibale name) = = ("the variable is equal to") 0 = (the value of the varibale.)

for (n = 0 ; n <= 10; n++){ // for = (for loop syntax) n = (new variable) (n = 0 ; n <= 10; n++) = (variable's value is 0; stop loop when the variables value is 10;loop command add a value to the variable. in this case add 1 to 0 ) 
                  //(n = n + 1) this can be writen in this format aswell 
    console.log(n); // console.log(n) = (the tool we use to see our loop in the terminal)
    addedUp += n; // addedUp += n = ( add to addedup the value of n) (since addedUp's value is 0 and n's value 1,2,3,4,5,6,7,8,9,10 it will have to cpress it to a sigle number aka 55.)
    
}
console.log(addedUp);//(console.log(addedUp) = the tool we use to see the value of addedUp variable.)

