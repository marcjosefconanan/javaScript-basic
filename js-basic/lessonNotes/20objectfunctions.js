// now we are about to talk about "object functtion"

let obj = {

    "key" : "value",
    "number" : 10,
    "funct" : (arg) = arg => arg + 2,
    "obj": {
        "key" : 2 
    }
} 
//direct assign
function changeValue (obj,key,val) {
    let copy = obj;
    copy [key] = val; 
    return copy;
}

// now as you can see here we didn't actually copy this obj value we just pointed it so that we would have the same value as obj 

// now what if we wanted to copy it ? here's how u do it. 

let obj1 = {

    "key" : "value",
    "number" : 10,
    "funct" : (arg) = arg => arg + 2,
    "obj1": {
        "key" : 2 
    }
} 
function changeValue (obj1,key,val) {
    //object data sign : this is the syntax we use when we want to use it. 
    let copy = Object.assign({}, obj1); // as u may have noticed we also included a "{}" to this process, what this actually does is it will actually assign all their keys and values to this empty curly bracket.
    copy [key] = val; 
    return copy;
}

// now if we wanted to use changeValue to a number value that is 2 :
let output = changeValue (obj1, "number", 2); //
console.log (obj1.number); 
console.log (output.number);
// so now insted of using the direct assign now we are using this new moethod called "object data sign"

// now if u run this ull get the numbers 10, 2 
// the 10 is still the value of the old object 
// with the 2 it means that we have created a new value "2" and thats its reffering to a complety new object. 

// this is how we use the method "object data sign" with the code "assign" as its core. 

// noow what if theres a scenario where we wanted to keep our objects value and not change it how do you think we could achive that ? 

// now if u thauth tht we should leave it be, that the same idea i had hahaha 
// but in a serious note we could use "const" insted of "let" cuz its not interchangeable right ? 

const obj2 = {

    "key" : "value",
    "number" : 10,
    "funct" : (arg) = arg => arg + 2,
    "obj1": {
        "key" : 2 
    }
} 
function changeValue (obj2,key,val) {
    let copy = Object.assign({}, obj2);
    copy [key] = val; 
    return copy;
}
Object.freeze (obj2);
obj. number =  15; 
console.log (obj2);// now in this case we were actually able to change the number but const can olny change the objecs value but if it were to be used a number value it would work 
// so that what this new method comes in its called "freez" brrr its so cold here   

// now what does "freez" ACTUALLY DO ? its basically a "const" keyword but for objects. 
//now this is really helpfull when u have a huge object with a bunch of values that you don't want to be change in your code in any way. 
// cuz that can cost some errors or you lose something important. 

// now this "Object" class is very usefull in varius ways its big O-bjects 

// for example :

Object.is (1,1); //  Object.is () = the Equality this Object class takes 2 or more arguments and sees if their equal. 
// this is very similar to writing "==="

