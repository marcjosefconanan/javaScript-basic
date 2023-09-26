// now lets see some array methods.

let obj ={
    "first" : 1,
    "second" : "2",
    "third" : true
}

let arr = [1,"2", true , ,4,5,6,7,7,8,8,9,9,90,0,2,6,4,3,{"key":1},8,2,1,34,3,54,3,45];
console.log(arr.length);
//arry[40] = 10;
arr.push(10); // what does "push" actually do ? it adds a new element and returns the new length.
// if this adds then what about if u wanted to remove one value ? 

arr.unshift(10);// if we wanted to insert something in the beginning. 

console.log(arr.length); 

console.log("pop: " + arr.pop()); // since we didn't specify which one do we need to pop it will pop the last number on our array. 
//this kind of data structure is called last in last out. 
// this literally pops one of ur values off the array HAAHAHAH  
console.log(arr.length);  

console.log(arr);


//console.log(arr.join(", ")); // what "join" does it will actually take all  the elements of an array and put it in to a one big string at the end.  
//0, 1, 2, true, , 4, 5, 6, 7, 7, 8, 8, 9, 9, 90, 0, 2, 6, 4, 3, [object Object], 8, 2, 1, 34, 3, 54, 3
// it putted everthing in a one big string value. 

// we can change the separator value in to a (arr.join("? ")); if we wanted to have this :

//10? 1? 2? true? ? 4? 5? 6? 7? 7? 8? 8? 9? 9? 90? 0? 2? 6? 4? 3? [object Object]? 8? 2? 1? 34? 3? 54? 3?

// in this way we can use it to make a sentence for example :

let words =["this", "is","the","best","time"]
console.log(words.join(" ")); //this is the best time

//let me show u a teaser for of a "for each function."

words.forEach((el) => console.log(el)); // this will print out every element of our array. 

