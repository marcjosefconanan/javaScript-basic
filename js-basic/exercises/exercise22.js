/*
# Esercizio 22

- Modifica il costrutto if creato nell'esercizio 20, trasformandolo in un costrutto switch

let str = 10;


if(typeof str === 'String' ){

    console.log ("this is string");

} else if (typeof str === 'Number'){

    console.log('Number');

}else if (typeof str === 'Boolean'){

    console.log ('boolean')
}else console.log ('none of the above');

 */



//--------------------------------------------------------------------

//ASNWER


str = 10;

switch (str) {
    case "string":
    console.log("this is a string!!");
    break;
    case Number:
    console.log("this is a number!!");
    break;
    case Boolean:
    console.log("this is a boolean!!");
    break;
    default:
    console.log("this is another data type!!");
    break;
}