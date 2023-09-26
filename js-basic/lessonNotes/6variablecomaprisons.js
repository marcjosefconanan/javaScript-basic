//true-y and false-y
// u must be asking right about now, whut tf are these true-y false-y floppy sounding things are ?!
// chill let me explain so u donuts can comprehend this shz.

// now what better way to explain by exapmples right ? here u go: 

let str = "1"; //truth-y

let emptyString = ""; //false-y

let trueValue = true;
let falseValue = false;

console.log(str == trueValue); //the aswere is true
console.log (emptyString == trueValue); // the aswere is false

//basicly what happend here bruh, is by using the "==" ur saying or rather forcing my man JS to find a value in these two situations in boolean form 
//so since my man JS is smart he said "yo im just gonna give all the empty string the value of false and anything else is true frfr", 

// NOW TO EXPLAIN WHY THIS SHZ IS SO IMPORTANT "=" or "=="

// when we set an assignment to a code like so:

let bool = true;

//we use just one "="

// but when want to know if something is equal AKA COMAPRISON/ we compare we use this "==" for equality like the gay pride or something like tht it does look like their flag tho. 

bool == true; //*

//* important side note REMEMBER THIS "==" WILLL ALWAYS I MEAN ALWAYS EVALUATE TO 'TRUE' OR 'FALSE' BECAUSE IT IS A BOOLEAN COMPARISON.

// now GREATER THAN this is mainly used for numbers its symbol as we all know is '>' this the the v on the right sign.
// now when using this my man JS since his smart he will always try to put a numerical value on the thing that u want to know what is it grater of for ex: 

let bool1 = false; // now since bool1's value is false which is 0 

bool1 == true;

bool1 > true; // now my man Js will try to cast thi bool1 in to 0 and this true as a 1 

// and we all know that 0 inst greater that one so the aswere JS will make is False. 

 console.log(bool > true);// aswer False

 //THIS SHZ IS THE SAME THIS AS console.log( 0 > 1);

number > number; 

//and its the same this with numbers and strings JS will always try to convert one when used with "==" and with greater and less than it will try to convert it to boolena value ass well. 

// now did you this this is type of 'equality' "==" is enough for my boy JS ?!?
// THE ASNWER is no !! here comes the "===" triple equalityyy 

// now the only diference here is if their not the same value or type it will always be false ex:

let guy = "1";

let girl = 1; 

console.log(guy === girl); // it says false even tho their both ones, if u remember if we were to use these "==" it would have said true. 

//and thats why we would use more often the "===" than the "==" in most cases because it's more reliable and predictable. by using the "==" is a real easy way to introduce some bugs. 





