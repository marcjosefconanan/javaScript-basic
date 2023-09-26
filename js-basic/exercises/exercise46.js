/*
# Esercizio 46

Partendo dall'esercizio precedente, tramite un ciclo `for`, dobbiamo stampare tutti gli elementi contenuti nel nostro array

Indicazioni utili:

- In caso di difficoltà, riguarda la lezione
- Abbiamo fatto qualcosa di simile anche con gli oggetti, iterando su di essi

*/

//--------------------------------------------------------------------

//ASNWER
const students =[{id: 1 ,name: "Marc Josef",surname: "Conanan",age: 23},
              {id: 1 ,name: "Earl Josef",surname: "Conanan",age: 28},
              {id: 1 ,name: "Seth",surname: "Francisco",age: 23},
];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}