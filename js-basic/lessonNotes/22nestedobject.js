// and now we will be talking about nested objects. what are they ? how to use them ? and how to use them ? stop.look.listen. HAHAHA

let nested = {
    "subObject" :{

        "value" : 1,
        "value1" : 4,
        "nested" :  {
            "value2" : 10
        }
    }
}

// now to grab a proper value that u want in a nested object you have to use "console.log(nested.subObject.value)" this kind of code.

console.log(nested.subObject.value);// 1 

// now to go a level deeper you could just do this: 

console.log(nested.subObject.nested.value); // 10 

// as you can see this nested thing can go as far as you want it to go but by doing that your code might be more prone to bugs and erros. 
// and an errors that happens quite often in this code is when a value doesn't exist. 

console.log(nested.subObject.doesNotExist.value);// as you can see this gives us an error cuz it couldn't find the value that u were looking for "doesNotExist".
// as you can see this might become a problem cuz it didnt run the code at all, not like other objects tht will just print out "undefined" andmove on. 

// to fix this and keep the code runnig even with a problem we could use something like this :

console.log(nested.subObject.doesNotExist?.value);// we no longer get an error but we do get "undefined" now what happend ? 
// this u see it waldo ?? did you find what we did differently ?? if ur answere is "?" ur correct. 
// this "?" basically is saying that (if this "doesNotExist" exist then ill try to access it.)
// in more basic terms :
// Js: oh ok let's start with "nested", then "subObject" then we try to find "doesNotExist?" oh it doesen't exist ? OKAY then i stop here.
// so like said before it wont even perform the last argument "value2"
//in this way this "?" helps us to avoid errors because if not for ? it would also stop next executions like so: 

console.log(nested.subObject.doesNotExist.value);
console.log("next in line"); // as you can see we never see the print "next in line" because we have a breaking error in our code which stops everthing after tht point. 
//(also called a crash!)

//but if we introduced this "?" this happens: 

console.log(nested.subObject.doesNotExist?.value);
console.log("next in line"); // it prints out undefined AND next tin line. because the error above is no longer a stoping error so it will continue to run our code. 

// often just in case developer like to use this "?" just it case so that it the code doesen't crash but its not a practical way to code. 
// plus u use something like a "constructor function" u wont even have to come to this. 
// because u will always be sure of the structre of your object.

//we can also use something like this so that we have a more clear view of what is happening insted of just an error. 

console.log(nested.subObject.doesNotExist?.value);
if (nested. subObject.doesNotExist?.value === undefined){// with something like this u would think "ok now we werent able to use this key and now we get some error."
    // which we can print out here: 
    console.log ("this key doesNotExist does not exist!!")// undefiend key doesNotExist does not exist!!
}
console.log("next in line");

// so it short try to have ur object a consisttent structure so that error like this don't happen. 
// if u cant avoid it with something like an Json api "code made by someone esle" you can just use these "? "methods and other methods here..
// to identify and fix the problems

// let's see another case where this "?" is usefull to us : 

let value1 = nested.subObject.doesNotExist?.value;
if (value === undefined){ 
}
console.log("next in line");

// lets pretend that this value is important and we have to use it in another line, but that value being undefined actually breacks our code and we would rather use a default value. 

let value = nested.subObject.doesNotExist?.value === undefined ? 
            0 : nested.subObject.doesNotExist.value; // we could bring in our turner operator which is alse "?"
if (value === undefined){ 
}
console.log("next in line");

// in this way we make sure that we never have an error  by giving an undefined value because we gave it an actual undefined value that we can use for other calculations.

// for example if i were to use another calculation here like so :

console.log(value + 10); // 10 

// now i know that this will always run correctly. 

// and if the code were to run smoothly by adding "doesNotExist?" and "value" in the nest it would just run the same because of this code "nested.subObject.doesNotExist?.value === undefined ? 
// 0 : nested.subObject.doesNotExist.value;"

// and the resault would be "next in line " 12 insted. 