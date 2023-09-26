// now we are gonna start with one of the most important building blocks in most coding languages and that is trtrtrtrtrtr 

//FUNCTIONSSS!!!!

// we are gonna learn to use them in our code, declare them, kiss them, scrach them and ect haha (tht was a joke)

//less gooo!!

//actually these functions are sneaky cuz we already used them without knowing it 

// remember this ? 

console.log ("SNEAKY") // now where is the function here you might ask ? its trtrtr "log" (this sneaky ass) 
//joking aside log is what we call a (METHOD) METHOD AND FUNCTION are very simmilar to one another the difference are 
//"function" is a bit more general meaning it can go where ever and method is usually attached to some another class like in this case "log" is attached to "console"

// now what makes a funtion a function ? first off all u have to a function code like so "log" then u always have a parentesis like so "()" to inclose 
// "arguments"*
// * arguments are whenever we are putting a value on a function, they are "arguments" 


// METHODS AND FUNCTIONS :

console.log ("SNEAKY") // this is a function 

typeof(2) //this is a function  

funct (argum1 , argum2, argum3, argum4, argum5) // this is a function with some arguments u can put as many arguments as u like.

//in javascript we write 2 main types of funtion these are :
// RETURNS OUTPUT
// AND PERFORMS OPERATIONS WITHOUT OUTPUT. 

// usually we use the RETURN OUTPUT version like these type "typeof(2)" cuz u put "2" as an input and it will return another vale as output. 


// now that we know what a function is lets try to creat one 
// the first thing u do is u type in the "FUNCTION" keyword like so:

function nameOfMyFunction (arg1, arg2){

                            //this is the "body" and you can actually write the logic of ur function here.
    let sum = arg1 + arg2;
    return  sum;            //iknow i know wth is "return" its a special keyword that can only be used in context of a function. 
                            //now what it does ?*
}
    let output = nameOfMyFunction (2,3)
    console.log(output); // it prints "5"

//its a bit confusing so hang tight, it will do some calculation in this case "arg1 + arg2" then on the last step it will return some value 
//and then that value that its returning will be accesable outside of the function after it runs.


// now i told you about this type of funtion PERFORMS OPERATIONS WITHOUT OUTPUT but what are they and why do we use them ? 
// heres a prime example of a function that PERFORMS OPERATIONS WITHOUT OUTPUT aka  without giving us back a value like this :

function sayHello();{
console.log("Say Hello");

}

let Hello = sayHello();
console.log(Hello);

// so these are simple ways to write function, javascript has a special way of treating functions like some other coding languages don't have. 
// it can treat a function as a kind of value.

console.log(typeof(sayHello)); // as you can see here we'll see that type of this function is actually function.

// now why is this important ? is because with this we can treat our functions as any other data type like (numbers,strings and boolean.)
//like so : 

let func = sayHello;

func(); // i actually can call this function using a reference to that function. 

// this is a very usefull and fun way to use functions and values at the same time. 

// with this function keyword if u were to put the function "sayHello" up top it would still work as long as u have declared a value on that function.  


