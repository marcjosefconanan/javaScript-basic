/*
Dato il seguente array di oggetti:
const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
{ id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
{ id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
{ id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
];

Creare una funzione che passi in rassegna gli elementi dell'array e produca il seguente output:

Luca
Life Is a Game, Play to Win!
Mario
Never give up!
Giovanna
Life Is a Game, Play to Win!
Carmelo
A picture is worth a thousand words!
Il più giovane è Carmelo
Il cognome più lungo è Brambilla

Poi aggiungi un nuovo studente al terzo posto dell'array:

{ id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'}

e riesegui la funzione. Dovesti ottenere il seguente output:

Luca
Life Is a Game, Play to Win!
Mario
Never give up!
Elena
A picture is worth a thousand words!
Giovanna
Life Is a Game, Play to Win!
Carmelo
A picture is worth a thousand words!
Il più giovane è Carmelo
Il cognome più lungo è Pappalardo

Ogni motto è associato all'hobby dello studente.
E' possibile creare diverse funzioni che si occupino ognuna di un task diverso e richiamarle tutte dentro la funzione padre.
Il console.log può stampare una combinazione di stringa e variabile ( es: console.log('Ciao', name) ).

*/

//--------------------------------------------------------------------

//ASNWER

// Definition of the array of students
const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
  { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
  { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
  { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
];

// Function that returns the motto associated with a hobby

//--------------------------------------------------------------------
//FUNCTION = CHAPTER 10, 11, 12 !!!
//--------------------------------------------------------------------
function printMotto(hobby) {
  switch (hobby) {
    case 'gamer':
      return 'Life Is a Game, Play to Win!';
    case 'sportsman':
      return 'Never give up!';
    case 'photographer':
      return 'A picture is worth a thousand words!';
    default:
      return 'No motto';
  }
}

// Function that finds the youngest student
function findYoungestStudent(students) {
  let youngest = students[0]; //WE START WITH "LUCA"
  for (const student of students) {
    if (student.age < youngest.age) {
      youngest = student;
    }
  }
  return youngest;
}

// Function that finds the longest surname
function findLongestSurname(students) {
  let longestSurname = students[0].surname; //WE START WITH LUCA
  for (const student of students) {
    if (student.surname.length > longestSurname.length) {
      longestSurname = student.surname;
    }
  }
  return longestSurname;
}

// Main function that prints details of the students
function printStudentInfo(students) {
  for (const student of students) {
    console.log(student.name);
    console.log(printMotto(student.hobby));
  }

  const youngestStudent = findYoungestStudent(students);
  console.log('The youngest is', youngestStudent.name);

  const longestSurname = findLongestSurname(students);
  console.log('The longest surname is', longestSurname);
}

// Execution of the function with the original array
printStudentInfo(students);

// Adding a new student
const newStudent = { id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'};
students.splice(2, 0, newStudent);

// Execution of the function with the updated array
printStudentInfo(students);
