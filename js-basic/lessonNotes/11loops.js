//now lets start with the loopsy doopsy loop !!
// lets creat a simple loop in my man JS 
// there different kinds of loops and here they are :

//for loop:

let i;
for ( i = 0 ; i < 3 ; i = i + 1 ){ // this is what is called a syntax aka a formula for a specific function. 

    //this is a simple for loop !! confusing right ? now u must be ask whut happend let me explain ill translate it on human words. 

//for* (initialize** our iterator*** ; set our stopping condition ; update our iterator.)

// in more simpler terms: 

// for (this part is to start our iterator ; this part is to have a stop condition in our example is when "the number value is greater then 3" ; the lastly how the iterator would update.)

// without these 3 components we cant run a loop 

//* this is our command like (if , els or let , const) it serves to activate our "for loop" 
//** to start (in this case to have a starting value )
//*** is an object that has the potential to give value in a loop

console.log(i); // (now to see if works) it should show 3 numbers such as 0 , 1, 2. then i woeks.
// fun right ? now one would be asking why didn't it print 3 as well, to that i would say readdd the codee it clearly says "continue untin the value is still less than 3"  
}

// now to make things fun why not add this so that we can see exactly when will the loop stops. 

console.log ("end of for loop: " + i ); // it should print out 0, 1, 2, end of for loop: 3 
// cool right ??  

//now you can change the value of i how ever you want and you can play with it 

// but another way to write our ending here which was " i = i + 1 )" this part you can write this insted and it will do the same thing 
// i++ 
// i++    =      i = i + 1 
// its just a short cut meaning add 1 to i. 

//while loop:
// now lets try a while loop 
// ill make it the same as our for loop so we can compare it. 

let j = 0;
while (j < 3){
    console.log(j)
    j += 1
}

// did you see that it gives you the same and exact thing but in a different format. 

// now what if we wanted to make a loop that will stop only when they reach a certain lenght like in a password or something we would do something like this 

let str = "" ;
while (str.length < 8){
    str = str + "A";
}
console.log(str);

// it would produce "AAAAAAAA" cool right ? with this basics and more u could possibly make an app to crack a password haha.

// now theres no real significant differences between these two but as you can see thee for loop now it a bit clutterd so one would think that its essier to use
// the while loop cuz its more compact and clean.
//but it really dosent make significant changes if u use one or the other.  

//-------------------------------------------------------------------------------------------------------------------------


// now let me give you some examples on how to use the for loop and the while loop. 


//as we saw this is how you creat a loop that counts thru 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,

let i1;
for (i1 = 0; i < 11 ; i++ ){ //10 ; num++ ) insted i = i + 1

    console.log (i1);

}

console.log("end of loop:" + i1 );


//now what if u wanted it to count backwards : 0 to -10 


for (i = 0; i >= - 10 ; i-- ){ //10 ; i-- ) insted i = i - 1

    console.log ("the number is " + i);
}


// if you wanted to change a for loop to a while loop. on the first exercises

let ione = 0;

while (ione < 11){
    console.log(ione);
    ione++;
}

console.log ("end of loop:" + ione );

// now what if you want it only to printout the even number of 0-20 ? 

// right asnwer 

for (i = 0; i <= 20; i++){

    if (i % 2 == 0) {

        console.log(i);
    };
}

// this is a cleaner and more efficient code. 

//now the last one : what if you wanted it to print out the numbers thru 1-10 but it would add each number to another like so (1 + 2 + 3 ..) comming up with the resault of 55 ?

let sum = 0;

for (i = 0 ; i <= 10; i++){
   
    console.log(i);
    sum += i;
    
}
console.log(sum);