/*
# Esercizio 43

Il nostro oggetto `student` è incompleto. Abbiamo bisogno di aggiungere a questo oggetto, un ulteriore oggetto al suo interno di nome `personalData`. L'oggetto nested `personalData` deve contenere le seguenti proprietà: `name`, `surname`, `age`.
Sapresti inserirlo?

Indicazioni utili:

- Stampare sul terminale l'oggetto nested `personalData` che dovrà trovarsi dentro `student`


const student = {
  id: 1,
  school: "Liceo",
  year: 3,
};


 */



//--------------------------------------------------------------------

//ASNWER

const student = {
  "id": 1,
  "school": "Liceo",
  "year": 3,
  "personalData":{
    "student" : "Marc Josef, Conanan, 24"
  }
};

console.log(student.personalData.student) // Marc Josef , Conanan, 24

//or it can be done here like this too: 

const student1 = {
  "id": 1,
  "school": "Liceo",
  "year": 3,
  "personalData":{
    "name" : "Marc Josef",
    "surname" : "Conanan",
    "age": 24
  }
};

console.log(student1.personalData); // { name: 'Marc Josef', surname: 'Conanan', age: 24 }