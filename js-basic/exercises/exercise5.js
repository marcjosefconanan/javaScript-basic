/*# Esercizio 5

- Crea le variabili `isDoorClosed` e `isDogOutside`, saranno delle variabili di tipo booleano
- Assegna `true` alla variabile `isDoorClosed` e `false` alla variabile `isDogOutside`.
- Esegui lo script con node
- Prova a invertire i valori delle variabili e vedi cosa viene stampato in console */

//--------------------------------------------------------------------

//ASNWER

// Scrivi sotto questa riga
const isDoorClosed = true;//change to false to see another answer
const isDogOutside = false;//change to trueto see another answer


// Scrivi sopra questa riga, non modificare le righe successive
if (isDoorClosed == true && isDogOutside == false) {        
    console.log('La porta è chiusa e il cane in casa');     // questo costrutto sarà 
} else if(isDoorClosed == false && isDogOutside == true){   // spiegato più avanti
    console.log('La porta è aperta e il cane è fuori');
}  else console.log('Cambia i valori delle variabili');


//this is just a teser per say for the thing we can do with boolean values with if or els.