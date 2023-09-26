// in operator and for in loop ??? 
// dunno im as confused as you are haha 


let obj = {

    "key" : "value",
    "number" : 2,
    "funct" : (arg) = arg => arg + 2,
    "obj": {
        "key" : 2 
    }
}
// now same thing for the data type of a value (boolean, number, string) we use "console.log(typeof())" right ? 


// now what this syntax is saying is :
// now what if we wanted to see if a certain "key" is in what object ? we use this : if ("number" in object)

if ("number" in obj){
// if this key aka "number" is in this object aka "obj" run this code "console.log(obj[number + 10])".
    console.log(obj[number + 10]);
// put in the terminal number value "2" + "10"
} else {
    console.log ("this number doesn't exist !!")
// and if that doesn't work print this ""this number doesn't exist !!".
}

// this let's us check the structure of our objects, we can use this to make sure that we dont introduce errors in our code thru our object syntax. 

// we mainly do check ups on code when we are given a code by another person just to make sure that the code that we are inputing in ours dosent clash or give bugs or errors along the way. 
 

// but what if we want to go a setp further and we want to see all te keys it has and their values ? heres how : 

//IT'S CALLED "FOR IN LOOP."

for (const variable in obj){
    console.log(variable); // key, funct, obj, number // we use this to see the key names 
    console.log(typeof(variable));// string, string, string // we use this to see their data type. 
    console.log(typeof(obj[variable])); // number, string, fucntion, object // we use this to see the values attached to those keys. 
} 
// this is just a more efficient way to see the information that you need inted of going and checking each and evey code and or checking by using console.log