//now lets strat with another type of function which is arrowfuntions 
//this is gonna be fun !!

//this function is just a more eefficient form of the others and a shorter version to write them. 

//now let's try to creat a arrow funtion, here is a normal function and let's try to recreat it into a new and fun arrow function. 

function normalFunction (arg1){ // funtion = (syntax for function) normalFuction =(funtion name) arg1 = (argument name)
    return arg1 + 3; // return = (syntax for return) arg1 + 3 = (argument + numerical value of 3)
}

let aarowFunc = (arg1, arg2) => { // this is why they call it an arrow function "=>" it look like an arrow right ?? 
    return arg1 + arg2; // this code can be simplefied even more like so *

};

//let aarowFunc = (arg1, arg2) =>arg1 + 3; //* like so.. its like a short cut or a short and weet version of the othr functions. 

// an arrow fuction can be writen like this because its designed to be writen as shortly as possible and it can 
// recodnice the missing elemts like: the "return" or the "{}" 


console.log (nurmalFunc(3));// the aswere here is 6
console.log(normalFunc(3)); // the aswere here is 6   

//now normaly we prefere to still use the normal functions in that are gonna be use thruout the page, 
// and we prefare arrow functions when writing call back funtions or anonymus* functions just in line with our code. 
// anonymus fuctions are function that does not have any name associated with it. 
// like this normalFunction "(() => consle.log(3))";  