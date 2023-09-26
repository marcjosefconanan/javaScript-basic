// now lets dive deep to this functions 

// now lets see how can we use the function mechanics to out advantage, like a new meta in DOTA2 lesss goo!!! as huskar would say it "DUSTINGGOOO"

// so here is is the code we hadin out last episode of coding is cool: 

 //when naming a function make sure u name it properlly "sum" means the sum of all the value. 
    
   
    sayHello();
    function sum (arg1, arg2){
    let sum = arg1 + arg2;
    return sum;
   }

   let output = sum (2,3);
   console.log (output); 

   function sayHello(){

    console.log("Hello!")

   }

   //let hello = sayHello ();
   //console.log (hello);

   //console.log(typeof(sayHello));

   let func = sayHello;
   func();


   // THIS IS A FUNCTION EXPRESSION. 
   let newFunc = function (arg1){ // now as we know that we can use functions as values of variable we can creat new functions using the same syntax.  
    console.log ("added" + arg1); //like so.

   }
   newFunc ("This is a new function");

   //these are the main difference between a regular funtin and a function expression: 
   // a function expression is when we creat a function with some kind of mathematical expression 
   //like in this case theres addition 
   // plus if we try to copy this kind of function and paste it above it creation it will give us an error un like the original one. 
   





