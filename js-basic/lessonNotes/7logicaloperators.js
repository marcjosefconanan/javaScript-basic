//now bruh lets talk about different logical opperators we can use to combine different conditions in different ways 
//*Logical operators perform logical operations: AND, OR and NOT.

//now we all know about this right ?

console.log (true == true);// true

//we all know that true with true with this symbol "==" is true but how about if we aded some conditions what would happen ? 

//ok lets start hang on to your sit this is gonna be a dozzy 

let conditionsA = true == true;
let conditionsB = true == false;

console.log(conditionsA); //true because true == true is true 
console.log(conditionsB); //false and false == true is flase because they dont have the same value 
console.log(conditionsA && conditionsB); // but here comes the good bit. the aswere here is false. i know i know ur asking why ? whtf is going on ? right ? let me explain. 
// this new symbol "&&" is called "AND" and his rules are simple he combines two elemts in to one boolean value which in this case true && flase = false 

//now ur gonna ask me why tf is it false right ? here let me show its functions u donut.

//AND (&&) TABLE:
/*
                TRUE        FALSE
        
        
    TRUE        TRUE        FALSE


    FALSE       FALSE       FALSE

*/
//IT'S EASY PEASY RIGHT ?! REMEMBER!! "AND" WILL ALWAYS GIVE U TRUE!! 'ONLY' WHEN THE VALUE IT BOTH TRUE!! AND 'EVERYTHING ELSE' I MEAN EVERYTHING IS FALSE!!.


//now its time for "AND's" natural enemy his rival!! his black to its white!! his dog to its cat his fire to its ice !!brrrrrrr (drums sound) lets welcome "OR" !!!!

//OR (||) TABLE:
/*
                TRUE        FALSE
        
        
    TRUE        TRUE        TRUE


    FALSE       TRUE       FALSE

*/
//SEE THAT ??? THEY OPPOSITES REMEMBER !! "OR" WILL ALWAYS GIVE U FALSE!! 'ONLY' WHEN THE VALUE IS BOTH FALSE !!! THEN ITS ALL TRUE.

// now let me show you an example on how to use this in a useful situation so that u numnuts can understand : 

let num =  3;
let conditionsC = num > 2;
let conditionsD = num < 8;

console.log(conditionsA); // true because 3 is indeed greater then 2
console.log(conditionsB); // true because 8 is indeed greater then 3 
console.log(conditionsA && conditionsB); //true because 3 is in between this two numbers.*

// *now what && is doing here is his not combining the two numbers like we saw in the boolean value but he is looking if the cariable num is indeed between 2 and 8. 
// 2--3-------8 so its true. 

let num1 =  9;
let conditionsE = num > 2;
let conditionsF = num < 8;

console.log(conditionsA); //true because 9 is indeef greater than 2 
console.log(conditionsB); // false because 9 is not lesser than 8 
console.log(conditionsA && conditionsB); // false because 9 does not fit between the two numbers.

// but here if i were to put the value of num1 to 9 insted.
// it would be something like this 2--------8-9 so its false 

//NOW THIS TYPE IS VERY USEFULL WHEN YOU HAVE A VERY SPECIFIC REQUIREMENT TO ONLY RUN CODE IF ITS TRUE. 

// and now last but definitly not the bit least or is it ?? "AND" and "OR'S" third cousin "NOT"
// look at "NOT's" cool sign "!" see ? so minimal yet cool haha 

//NOT (!) TABLE:
/*
        !TRUE = FALSE

        !FALSE = TRUE
*/

//SIMPLE RIGHT ??? IT'S BASICLY SAYING WITH THIS (!TRUE = FALSE) BULL IS "IM NOT FRIKING TRUE SO IM FALSE" 
// so when you see this "!" minimal yet cool symbol its literally saying im the opposite of this shz ex:

let num2 =  9;
let conditionsG = num !== 2; // this is basically saying "9 is not eaqual to 2"
let conditionsH = num < 8;

console.log(conditionsA); //true cuz 9 is "not" equal to 2 there for true 
console.log(conditionsB); //false cuz 9 is greater then 8 
console.log(conditionsA && conditionsB);// false because 9 does not fit between the two numbers.