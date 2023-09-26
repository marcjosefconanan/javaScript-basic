// now lets talk about arrays the other most important data structure. 

// arrays will hel us organize data into varius list which we can access very easily by using different kinds of indexes then with our objects. 

// here we'll be comaring objects and arrays. 
// see how can arrays be more usefull in in certain cases and vice versa with objects.

//now let's code!!!

let obj ={
    "first" : 1,
    "second" : "2",
    "third" : true
}
// now lets lay a scenario where the most important thing for me is that these 3 values go in order from "first" to "third".
// the problem with objects tho is that we are not assured that these 3 objects will always go in order.
// now to make this happen in an object we could use something like a for loop and use different kinds of keys which is a hassle and we all know how we dont like tht.

// so let's make our lives easier and make an array insted. 

let arry = [1,"2", true]; // an important not in an arrays is thatIT CAN HAVE MULTIPLE DATA TYPE VALUES JUST LIKE OUR OBJECTS BUT WE NO LONGER HAVE     "KEYS."

// now ur asking thats cool and all but how do we access these data types without any keys ? 

// with objects u would probably use somehting like this: obj["first"] or obj.first right ? now with arrays we use something different: 

//console.log(arry[0]); easy right ?? 
// now ur asking why put a "0" there ? its because since our arrays are always in order if we want to call a data we just use number insted of keys like so

// but now ur asking why "0" tho ? isnt it 1 ? 
// now calm down my little knob theres a thing in these codes called "zero indexing" that means that all list starts with "0" not with "1"

console.log(arry[0]);// now if we ran the code the aswere is "1" cuz it was the first value on the list. 

// and the main and cool defference is that objects get a little bit chucky right ? cuz u have keep wring keys over and over, but with arrays u can just values and go!go!go!go!go!go!go!go!

let arry1 = [1,"2", true,123,456,8910,11112,1314,1516,1718,1920,21,12,32,12,3,43,4,34,3,5,112,,123,1,23,12,4,3,54,5,2,3,31,4,12,1,4,3,13,1]; //and so on.. 
//so if we have these many values the time consuming problem here is to count the number of values in here right ? say no more !! heres a solution.

console.log (arry1.length);// 41 this is a new keyword specifically  for arrays. 

// now we can use this "length" to translate that in to our array to:

for (let i = 0; i < arry1.length; i++);{ // is is basically saying:
    //i is equal to 0 (the first value); stop when i is less than (the array lenght); print our 1 at a time. 

    console.log(arry1 [i]); //1,"2", true,123,456,8910,11112,1314,1516,1718,1920,21,12,32,12,3,43,4,34,3,5,112,,123,1,23,12,4,3,54,5,2,3,31,4,12,1,4,3,13,1
}
// print out every value that array has. 
// and thats somthing we can't do on objects because objects dosent have a set leght like arrays do. 

// we can also nest arrays : 

let arry00 = [1,"2", [true,123,456,8910,11112,1314],1516,[1718,1920,21],12,32];

// or we can put objects in arrays : 

let arry01 = [1,"2", true,123,456,8910,{"key" : 11112},1314,1516,1718,1920,21,12,32];

// so any data type can fit in to an array. 

// an arrays is good and all but one common issue with arrays are is trying to access an index that doesen't exist. 
// so if i were to this : 

console.log (arry1[41]); 
// now u might be telling urself if i were to do this i would get the 41th value right ? 

// if u tried to run that we actually get undefined its mainly because of the zero indexing. cuz it srated with 0 then it also end in 40 inted of 41. 
// now we dont want u to have undefined cuz it could break our loop or crash our code. 

// thats where our for loop over there comes in handy because we made it so that it doesn't go over the actual lenght of our array. 

// now to chagnge array values: 

obj ["first"] = newValue;// this is how we change values with our objects. 

arry1 [0] = 350000; // this is how you do it with arrays. 

console.log (arry1 [0]); //350000
