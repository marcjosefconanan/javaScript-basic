// lets see another method to use functions and objects 
// by using this method we will be treating our objects more like class 
// so we are also gonna dive deep to some classes in javascript. 

// we are gonna be using a function named "constructor function" this will give us an object in a specific format with a specific set of keys 
// this way we can make multiple version of this object called "Intances" that all have the same kind of variables attached to them 

// now let's get started: 

// in javascript its best to start a constructor function name with a CAPITAL LETTER like so "Person" that way ypu can seperate these from ur normal functions.
function Person(name, age, nationality,){

    this.name = name; // think of these of something like this {name : name} or 
    this.age = age; // obj["age"] = age;
    this.nationality = nationality; 
// now what this is doing is that we are making a new "this" object, which will have this variable attached to.  
}

console.log (Person("Marc Josef", 24, "Filippino")) // Undefined (this is what we expected if u look closely.)

//now to make this work we are gonna use this new keyword called "New"

function Person(name, age, nationality,){

    this.name = name; 
    this.age = age; 
    this.nationality = nationality; 
 
}

let jui = new Person("julia", 23, "Italian"); //**

let marcJosef = new Person("Marc Josef", 24, "Filippino");

console.log (marcJosef); //Person { name: 'Marc Josef', age: 23, nationality: 'Filippino' } now as you can see we made object and we see that the "Person is attached"

console.log (jui);//Person { name: 'julia', age: 23, nationality: 'Italian' }

// the great thing about this is that i can actually make two people with completely different atributes like so: **

// who's older ? Marc or Jui ?? 
// now to answere this question it's realy easy. 

if(marcJosef.age > jui.age ){

    console.log (marcJosef.name + " is older !!");
} else {
    console.log (jui.name + " is older!!");
}

//now with this not only do we know whos older but we also know that both objects (marcJosef and Jui) has the same values. and thats the power of a constructor function

// but theres more we caan also add a ton more items like : 

function Person(name, age, nationality,){

    this.name = name; 

    if (typeof(age) === "number"){

        this.age = age;
    }else {
        this.age = Number(age);
    }

    this.age = age; 
    this.nationality = nationality; 
} 
// like if we wanted to make sure that the variable "age" is really a number and if not we couldforce it to become a number like in our if else statement above.

// see ? the goal of a constructor function is to try and stadarize things as much as possible so that i can use this values and compare them to one another.

// so we can do a bunch of error maching and so that we can make sure our code is doing what it sopposed to be doing. 

// a constractor function is like a save point after a boss battle where u save and u just have gotten a ton of stats and a lot of new itmes from previus battles. 

//IMPORTANT THINGS TO NOTE: 

// if u want to use a data structure multiple time USE A FRKING CONSTROR FUNCTIONNNN it will keep u sane and anybody thats sees ur code after.

//always write ur constructor funtion name with the first letter in capital so that we all know ur using it and that ur cool as cool beans!!!!!!!!!

// to call a constructo function we always have to use the "New" keyword. then we can all the function after tht just remember !! NEW CONSTRUCTION AHEAD !!!!!!!!!!! 

// remember if we dont return anything in a function it will ALWAYS give us undefined.
// constructor function are explicitly function that do not return anything. and so we use "new" to call it .