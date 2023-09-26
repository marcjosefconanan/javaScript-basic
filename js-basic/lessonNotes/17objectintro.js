// now lets talk about objects and what are they. 

// this is our go to data sstructure because its very usefull and easy to write and very straight forward, so leann ittt !! 

// this is the syntax of creating an object. 

let obj = {

    "key" : "value"

}

// now how do we find the "value" of an object here's how : 

console.log (obj["key"]) // Value. 

// easy right ? we can actually give multiple "keys" in an object for different resaults like so. 

let obj1 = {

    "key" : "value",
    "number" : 1

}

console.log (obj1["key"]) // key

// there's actually another way to see our resault, it's  with the dot "." like so: (but we generealy use the "[]" more cuz its safer and more readable.) 

console.log(obj1.number) // 1

// now with objects you can easly change the values of the "keys" in an easy way. like so : 

let obj2 = {

    "key" : "value",
    "number" : 1

}

obj2 [number] = 10 

console.log(obj2[number]) // 10 

// now we can also add new keys to a cetain object like so : 

let obj3 = {

    "key" : "value",
    "number" : 1

}

obj3 [number] = 10 

obj3[NewKey] = "new key!!"

console.log(obj3[NewKey]) // new key!!

// now did you know you can also have the list of all your keys in a object ??? amazing right ? look : 

console.log(Object.keys(obj3)) //['key' , 'number' , 'NewNumber']

// in javascript function can belong into different libraries so this fuction specifys which object are you reffering to. 

// since we can put any value in a key, so since a function is also a value we can actually use this to our adantage like to 

let obj4 = {

    "key" : "value",
    "number" : 1

}

obj4 [number] = 10 

obj4 [NewKey] = "new key!!"

obj4 [func] = (arg) => arg + 2

console.log(obj4[func(10)]) // 12 

// cool right ?? we just incorporated an arrow function in to a object. 