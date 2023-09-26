// now let's do an exercise, is this variable a string ? or a number ?:

//btw if you want to use the terminals correctly you have to put these "//" on the other console.log to meke the other work properly. 

let stringOrNumber = "6"; 

//the answer is string. how did i know tht ? with this tool: 

console.log (typeof(stringOrNumber))

//"console.log(typeof())" now you just put the variable name your confused about, run it on the terminal and boom !! 
//"console.log(typeof())" is a tool to see what type of variable are we dealing with. remember you cant never be too sure. 

//if u dont belive me, for further proof if u were to add these too: 

let stringOrNumber1 = "6";

let stringOrNumber2 = "6";

console.log (stringOrNumber1 + stringOrNumber2); // why does it say 66 ???? IT'S BECAUSE IT'S A STRINGGG!!


//now how about if you want to change this variable that are now "strings" in to "numbers" ? i gotchu!!
// you would have to use the method of casting* by using this : console.log (Number()) + (Number());
//converting one data type to another data type aka, the conversion of a string data type to Boolean for example. 
// but be carefull if you hear these words: "Type coertion or typecasting" THEY THE SAME THING BRUHH.

let strgOrNum1 = "10";

let strgOrNum2 = "10";

console.log (Number(strgOrNum1)) + (Number(strgOrNum2)); //if my math is correct it should be 20. right ? haha 

//but bruh theres other ways to "force" this coertion to happen wanna give u an example ? i gotchu fam !!

let stringOrNumber01 = "6";

let stringOrNumber02 = "6";

console.log (stringOrNumber01 / stringOrNumber02); // as you can see this one works it says 1 even tho i didnt add my spcial tool 

//this happend because it wouldnt make sense to divide a string right ? two word divided ? are u joking bruh ? so since JavaSvript is smart he did it on his own you go JS !!!

// now i know what are u thinking u curius dude "what if i put a word on one and a number on the other?" ill show u !!

let stringOrNumber03 = "6";

let stringOrNumber04 = "stfu";

console.log (stringOrNumber03 / stringOrNumber04); // u see ?? it says NaN !! i TOLD YOU MY BOY JS IS SMART !! his basically telling you that "NaN = Not a Number" stpid tsk,

// i know i know just to piss me off you want to convert "booleans" to "numbers" righ ? here you go, JS i choose you !! 

let trueValue = true;

let falseValue= false; 

console.log (Number(trueValue));

console.log (Number(falseValue)); // happy now ?? the numerical value of "true" is NUMBER 1!! cuz his number 1 and "false" is NUMBER 0! cuz he dont give af. 

// now since ur just a pain in my ass ur gonna ask me "how about if i want to convert my booleans to a string ?" right ? for heavens sakes bro here you go !!

let trueValue1 = true;

let falseValue2= false; 

console.log (String (trueValue1));

console.log (String (falseValue2)); //did you see that ? it turned into a string u happy now ? 

//you just have to change (Number (falseValue2)) that changes things in to numbers to (String (falseValue2)) that changes this in to strings. 

// now its time for the special types of primatives (sounds like primodials in chansawman right ??)
// the question here you donut is "what would happen if i convert undefined in to the three normla primatives?"


console.log (String (undefined)); // the asnwere is tsh chii (joke sound) undefined !! right ? bit anticlimactic 

console.log (Number (undefined));// the asnwere is drdrdrdrdrdr (drum roll sound) NaN !!! ahhaha you go JS ur so smart !!  

console.log (Boolean (undefined));// the asnwere is wang wang (fail sound) Falsee** !! why ? cuz its not true !! haha. 

//(**BTW its super important tell u later why, as a teaser tho their called: true-y and false-y ).