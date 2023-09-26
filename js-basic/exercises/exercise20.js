/*
# Esercizio 20
 
- Crea una variabile `primitive` e assegnale un valore che potrà essere di tipo numero, stringa o booleano.
- Crea un controllo per verificare il tipo della variabile e stamparlo in console.

 */



//--------------------------------------------------------------------

//ASNWER

let str = 10;


if(typeof str === 'String' ){

    console.log ("this is string");

} else if (typeof str === 'Number'){

    console.log('Number');

}else if (typeof str === 'Boolean'){

    console.log ('boolean')
}else console.log ('none of the above');

