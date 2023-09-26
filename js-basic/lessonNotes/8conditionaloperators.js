// now let me show you something cool !!
// itsss thisss (?) wow, underwealming right ? wait and see this is where js gets good. 

let num =  9;
let conditionsA = num > 2;
let conditionsB = num < 8;

let str = conditionsA && conditionsB;//lets say you want to use this string to set a new value on "str" if it ends up on false or true**
console.log(str);

//now now i know u already know this yull say "its false cuz 9 isnt between 2 and 8 like this 2-------8-9 duhh" chill out let me add something new.

//** it may end up something like this 

//now this is called TERNARY OR CONDITUIONAL OPERATOR. and its symbol is (?)
// now how does this work u ask, first you need to write your condition* then youll write your CONDITIONAL OPERTATOR (?) 
//THEN YOU PUT YOUR SCENARION IN CASE OF TRUE IS THE FIRT ONE "your awesome" AND THE SECOND ONE IS FAlSE "you suck"

//now lets preted your a rookie in the 2024 NBA DRAFT if ur on the top 10 your awesome and below u suck, now lets make a statement saying so.

let youRookie =  9;
let youNumber1 = youRookie > 1;
let youAlmostSucked = youRookie < 10;

let str1 = youNumber1 && youAlmostSucked ? "your awesome" : "you suck";//* 
console.log(str1);

//if you ran this on the terminal you would get "your awesome" cuz the statement is true u did enter the top 10 on the NBA DRAFT.
//but if you were to change the value of "youRookie" in to 15 it would say "you suck"

//you can use this condition in a variety of ways to know our value example if we want to know if our value is null or undefined 
//now lets say the null and undefind is when you get injured and if false nothing happend to you.

let rookie =  9;
let youTheGoat = rookie > 1;
let youAlmostSuckedd = rookie < 10;
let str2 = youNumber1 && youAlmostSucked ? "your awesome" : "you suck";
let injury = rookie == null || rookie == undefined ? "byebye career" : "False alarm" ;
//this actually reads: if rookie equals null(injured) or undefined(injured) then show "byebye career" (true) and if not show "False alarm"(false). 
console.log(str2);

//had fun huh ? this is type of error checking used to debug or just to make sure that everting is running smooth like butter and there no null variables or undefined. 
 