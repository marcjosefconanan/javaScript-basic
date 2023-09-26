// now here it its THE BELOVED IF ELS STATEMENTS HAHA 
// lets continue with our NBA DRAFT 

let rookie = 1;
let youTheGoat = rookie >= 1;
let youAlmostSucked = rookie <= 10;
//let str = youTheGoat && youAlmostSucked ? "your awesome" : "you suck";
if(youTheGoat && youAlmostSucked){
    //if this statement is true     //you can put any code you want in these spaces but ofc by puting code here it can have a more complex outcome 
    str = "your awesome";           // for example we can put our console.log(str) here for a more complex outcome than we would have if we put the console.log(str)*
    //console.log(str);             //in its usual place
}else{
    //if this statement is false    //you can put any code you want in these spaces
    str = "you suck";               //
    //console.log(str);             //
};
//console.log(str);*

// now let's try more if els statements.

rookie = undefined;
let injury = rookie === null || rookie === undefined ? "byebye career" : "False alarm";
if(rookie === null) { //if this part inst true then move below
    console.log("my God: super injured!");
} else if (rookie === undefined){ //and if this is not true then move below
    console.log("my God: undrafted!");
} else{
    console.log(rookie);//then if this isnt true then its false.
}

// now i know its a bit hasy but it is for me too, just know that if and els statement are very very usefull in javascript. 
