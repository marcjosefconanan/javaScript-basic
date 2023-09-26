//ok now we're gonna start with switch not the gaming console put the codee !!

// basically a switch statement is here to make our lives easier with the use of our all time fav "IF ELS statements"
// let me show you.

num = 6;

let output = num === null || num === undefined ? 0 : 5 + num;
//here we are basically saying if the outcome is null then our number will become 0 and if our outcome is undefined then 5 is added to our current number.
//this is our command with CONDITIONAL OPERTATOR

if (output = num === null || num === undefined) {

    console.log("Error : Null Number !!!")

} else {
    console.log (num + 5 );
}

//this is our command with If ELS staments the only difference here is when the outcome is null it will say "Error : Null Number !!!" insted of "0"

//now immagine that you have just built a if els statement and you want to know if the aswere is 1 do this and if the answere is 2 do this and so on and so on like so:

if (num === 1){

    console.log ("number 1!!");
  
}else if (num === 2){

    console.log ("number 2!!");

}else if (num === 3){

    console.log ("number 3!!");

}else if (num === 4){

    console.log ("number 4!!");

}
//a real hustle right ? its repetitive, cluncky and just tiring to write.
//now here is where switch statement comes in bruh!!

num = 2;

switch (num){
    case 1: 
    console.log("number 1!!");
    break; //now ur asking wtf is this right ? let me explain**
    case 2: 
    console.log("number 2!!");
    break;
    case 3: 
    console.log("number 3!!");
    break;
    case 4: 
    console.log("number 4!!");
    break;
    default: 
    console.log("Default");
    break;
}

//** this key word Break is to prevent the aswere to cascade down to others aswere because without it now if we were to put our variable to 1 if would give us 
//the other 5 asweres in the terminal.
//so basically the break keyword is just to stop it to a certain outcome and ignore the other ones.
//there are more like this but basically it just helps you to control the flow of your application. 