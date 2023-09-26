// now callbacks 

// this a special kind of function we dont write this function any differently but the difference here is how we use this function.
// we mainly use this function to performe some kind of operation after some other operation has already run ex:
// callbacks helps us to keep the different parts of our code running in the order we want them to run.

function first (){

    console.log (1);
}

function second (){

    console.log(2)
}

first();
second(); 

// this type of functions is what we are used to so theres no need to use a the callback function 
// but what would happen if in the gathering of information there was a delay like to 

function first (){
    //calling an API*
    setTimeout(function (){ // this is an annoymus function (we didnt give it a name) because after the fuction is done it won't work anymore.  
        console.log (1);
    },500) ; //this is the ime it would delay before it runs the function.  
}

function second (){

    console.log(2)
}

first();
second(); 

// now wthout callback since theres a delay in the firt function the second function will run first, now how do we keep the second function to run after the first function ?

function first (callback){
    //calling an API*
    setTimeout(function (){ 
        console.log (1);
        callback(); //*
    },500) ; 
}

function second (){

    console.log(2)
}

// first is my "main" function 
// second is my "call back function.ss"
first(second);

// now what we did here is that we put a new argument to our first fuction then when it hits our new callback code here * it will not run any other fuction
// until if fishes the first function.

// then we put  the second function in the first fuction so that when it fishes its firt function then it enters the second function. 