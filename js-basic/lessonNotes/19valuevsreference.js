// this time around we are gonna be talking about property of objects when they are passed to different functions and used in those functions. 
// because there are some values that are passed by "refference" and other values that are passed by value.

// i know its a bit confusing but lets start with the code: 
// lets be iluminated togehter HAHAHA, go keeper of the lightt 

let obj = {

    "key" : "value",
    "number" : 2,
    "funct" : (arg) = arg => arg + 2,
    "obj": {
        "key" : 2 
    }
} 

let a = 10; 

let b = 4;

b = a;

a = 5;


console.log (a); // 5 

console.log (b); // 10 

// so here ur asking why does a = 5 ? and b is = 10 ? isn't it sopposed to be a = 5 and b = 5 ? 

// now let me explain what happend here, since this code "b = a" happend before this "a = 5" b respected the first statement which was "a = 10" but a changed it 

// so in shot here we are practicly saying 

// this is what happens to primatives: 

let a1 = 10; 

let b1 = 4;
//b1 = 10

b1 = a1; // we are actually setting the "value" here not b1 point to a1 which can be writen like so "b1 = a1 = 5"

a1 = 5;
//a1 = 5 


console.log (a1); // 5 

console.log (b1); // 10 

// and this is kinda of the difference between whtat happens with primitives and what happens with objects. 

// objects : 

let obj1 = {

    "key" : "value",
    "number" : 10,
    "funct" : (arg) = arg => arg + 2,
    "obj": {
        "key" : 2 
    }
} 
function changeValue (obj1,key,val) {
    obj1 [key] = val; 

}

console.log (obj1 [number]) // 10

changeValue (obj1, number, 15);

console.log (obj1 [number]) // 15 as you can see this has been changed to 15 and thats the main difference 

// basically a primative when passed by a function it reflects the data type not the value outside of a function 

// but if an object passed the curly braces of a fuction the data type and the value of the object will be changed and translated . 


// now a summary of everthing tht we hopefully learend. 
// "OBJECTS" are reference to a specific point in our code (more like a save poin in games) and when we give those objects to a function 
//we're actually giving reference to that (save point) in our computer. and because o this we can actually change aspects of an object 
//within our fucntion (more little save points to save our ptogress) and have those changes transalted to the first object (like a home screen where u can see ur progress.)

// now this is not the case with primitive values such as (numbers,boolean and strigs) where we only actually pass the value of a variable and a reference to thevariable itself 
// meaning if we pass  a primitive value to a fuction if its first value was 100 then it will stay at the same value and so when we call the function, 
// our change is not reflected after the fuction has been finished (back to the start like in dark souls with no bonfire) all progress (changes) will be deleted after u die. (after u execute a function)

