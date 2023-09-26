/*
**INT**

Write a function that takes an array of objects as a parameter, each object represents a car with the following properties: brand, model, year. The function should return a new array of strings that contains the brand and model of each car made from the 2000s, in the format ["brand model"].
Print the new array.

**ITA**

Scrivi una funzione che prenda come parametro un array di oggetti, ognuno dei quali rappresenta una macchina con le seguenti proprietà: brand, model, year. La funzione dovrebbe restituire un nuovo array di stringhe che contenga la marca e il modello di ogni macchina nel formato "brand model".
Stampare il nuovo array.


 */



//--------------------------------------------------------------------

//ASNWER


const cars = [
    {brand: "Ferrari", model: "Testa rossa", year: 1999},
    {brand: "Jeep", model: "Wrangler", year: 2009},
    {brand: "Porsche", model: "Cayenne", year: 2020},
    {brand: "Ford", model: "Mustang", year: 2000},
    {brand: "Porsche", model: "Carrera GT", year: 2003},
    {brand: "Lotus", model: "Elise", year: 2001},
];

//--------------------------------------------------------------------
//FUNCTION = CHAPTER 12 !!!
//--------------------------------------------------------------------
//funzione che toglie le macchine che non fa parte del 2000 - 2009
function filterCarsFrom2000s(cars) {
    return cars.filter(function(car) {
      return car.year >= 2000 && car.year <= 2009; // && = and 
    });
  }
  //console.log(cars);
  
  //funzione che trasforma il risultato in stringa
  function formatCarString(car) {
    return car.brand + ' ' + car.model;
  }
  
  //filtra le macchine e da il risultato del primo funzione
  const filteredCars = filterCarsFrom2000s(cars);

  // da il risultato del secondo funzione che trasforma un oggetto a una stringa
  const formattedCarStrings = filteredCars.map(formatCarString);
  
  //risultato di tutto.
  console.log(formattedCarStrings);

  
  
  
  
  
  
  
  
  
  
  
  /*
// Array of car objects
const cars = [
    {brand: "Ferrari", model: "Testa rossa", year: 1999},
    {brand: "Jeep", model: "Wrangler", year: 2009},
    {brand: "Porsche", model: "Cayenne", year: 2020},
    {brand: "Tesla", model: "Model X", year: 2023},
];

  // Function to filter cars from the 2000s
function filterCarsFrom2000s(cars) {
  return cars.filter(function(car) {
    return car.year >= 2000 && car.year <= 2009;
  });
}

// Function to format a car object into a string
function formatCarString(car) {
  return car.brand + ' ' + car.model;
}

// Filter cars from the 2000s
const filteredCars = filterCarsFrom2000s(cars);

// Format car objects into strings
const formattedCarStrings = filteredCars.map(formatCarString);

// Print the array of formatted car strings
console.log(formattedCarStrings);
  */
