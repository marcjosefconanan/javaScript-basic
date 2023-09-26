/*
# Esercizio 45

Abbiamo bisogno di scrivere un array di nome `students`, questo array conterrà tre oggetti con le seguenti informazioni:

- id
- name
- surname
- age
  Dobbiamo scrivere queste informazioni per tre studenti diversi. Dopo averlo fatto, vogliamo stampare le info solamente del primo studente

Indicazioni utili:

- Dentro il nostro array, avremo tre oggetti, ogni oggetto conterrà le info di uno studente
- Dobbiamo stampare solamente il primo elemento dell'array

*/

//--------------------------------------------------------------------

//ASNWER

let students = [{"marc" : [111,"Marc Josef","Conanan",23]},
                {"ejong" : [222,"Ear Josef","Conanan",28]},
                {"seth" : [333,"Seth","Francisco",23]}];

console.log(students[0]);

// or you can do it like this

/*
let students =[{id: 1 ,name: "Marc Josef",surname: "Conanan",age: 23},
              {id: 1 ,name: "Earl Josef",surname: "Conanan",age: 28},
              {id: 1 ,name: "Seth",surname: "Francisco",age: 23}]

console,log(student[0]);
*/