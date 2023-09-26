// these are the variable types : let,const and var*. let and const are the more updated ones
//*outdated but still usable 
//the let in JavaScript are block scoped**.
//** Block-scoped variables and functions are defined inside a particular block or inside curly { } braces.
// and u can only declare it onece unlike var.

//this is called a decleration 
//let objectLenght;

//and this is an assignment
//objectLenght = 10;

//these two can be put on the same line for a more practical and clean looking code like so:

let objectLenght = 10;

//in javascript varibale names are prefered in camelCase*
//*which is when you write names in uppercase on the second word aka like a camels back ex(camelsBack)

//-----------------------------------------------------------------------------------------------------

//what is the difference between conts and let : const* in generally used as a safer alternative to let 
//aka its for more important things that doesnt cahnge that much.
//* const in short cont constant meaing : a situation that does not change.

const websiteName = "https://Google.com";
const objectWidth = 12;

//------------------------------------------------------------------------------------------------------

//var is short for variable 
// Var and let have basicly the same function.
// but unlike let that u can only declare once var can be declared multiple times and will replace the previous value without an error 

var variableNames = "string";
variableNames = 6.5;
variableNames = true;

//as you can see here u dont have to use the variable var or let multiple times because u already declered its name 
//which was variableNames.
//when u set a variable you can use it anywere you want ex:

// let sum = objectLength + variableName; 

//---------------------------------------------------------------------------------------------------------

//the use of the code "console.log()" is very important to know in any coding languages for debuging purposes. 
//when u use the "console,log()" and put any variable name it will show its value in the terminal* ex:
console.log (objectWidth); 

//it showed "12" because it's the value that we indicated up top. 
//*the terminal si where you see the errors or the outcome of your code. 
