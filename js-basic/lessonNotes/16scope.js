// now lets talk about one the most important aspects of javascript "SCOPESS"

// scope can be used in most programming languages 
// scopes decide when and where certain variables are accecible and what values they might have. 

// now what better way to lear to code than to see it right ? less go !!

// in JS there are multiple levels of scope they are "GLOBAL SCOPE","BLOCK SCOPE", AND "FUNCTION SCOPE".


//GLOBAL SCOPE :
let something = 5;
console.log(something);
if (true) {
// BLOCK SCOPE:
let something = 10; // samething here but this is only available in E6 of javascript so is u were to us "var" here insted of let the 10 would still apply to the global scope. 
    console.log(something);
}
function func (){
//FUNCTION SCOPE:
let something = 10; // as you can see here why can i write this code ?? even tho their have the same variable name ? its because a function scope con overwrite 
// what the other scopes are saying cuz its more local.
console.log(something);
}

func();
// NOW LET'S TALK ABOUT "THIS" YEAH THISS NOT THAT BUT THISS THISS !! AHAH 
this; // this keyword "this" stands for the context of what you are calling your code 
// let me give u an example:

/*
function func (){
let something = 10
console.log(this); // if u were to change this "someting" in to "this" like so it will store all the context inside that function bloack 
}
*/

// we normaly use "this" in classes or different call backs and its usesfull for calling a function that includes the cntext where its being called.
// TREAT THIS AS A TEASSER CUZ WILL BE SEEING IT A LOT MORE WHEN WE DISCUSS MAKING CLASSES IN JAVASCRIPT. 


// IMPORTANT NOTES HERE ARE "GLOBAL SCOPE" EFFECTS ALL AND ITS ACCESSIBLE EVERYWHERE ELSE EECEPT IF U USE "THIS" KEYWORD
//"BLOCK SCOPE" EFFECTS ITSELF AND IT U USE THE LET OR CONST KEYWORD IT WILL GO AWAY. 
//AND IF MAKE A VARIABLE INSIDE UR "FUNCTION SCOPE" IT'S ONLY ACCESSIBLE TO THAT FUNCTION. 
