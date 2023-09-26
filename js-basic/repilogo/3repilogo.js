/*
**INT**

Write a function that takes an array of numbers as a parameter and returns a new array of only the prime numbers in the original array. 
Print the new array.

## Suggestion ##
Use a for loop to iterate through the array and a nested for loop to check if each number is divisible by any number other than 1 and itself.


**ITA**

Scrivi una funzione che prende un array di numeri come parametro e restituisce un nuovo array contenente solo i numeri primi dell'array originale.
Stampa il nuovo array.

## Suggestion ##
Utilizza un ciclo for per iterare nell'array e un ciclo for nidificato per verificare se ogni numero è divisibile per qualunque numero diverso da 1 e se stesso.



 */



//--------------------------------------------------------------------

//ASNWER

// controlla se il numero e prime cioè (se divisibile)
function isPrime(num) {

    //se il numeri sono minore o uguale a 1 allora non è prime. quindi false
    if (num <= 1) return false;

    //se il numero è maggiore o uguale a 3 allora e prime. quindi true
    if (num <= 3) return true;
  
    //numeri divisibili a 2, 3 non sono prime 
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    //controlla i numneri se sono prime con il +/-
    for (let i = 5; i * i <= num; i += 6) {
    
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  function getPrimeNumbers(numbers) {
    return numbers.filter(num => isPrime(num));
  }
  
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const primeNumbers = getPrimeNumbers(numbers);
  
  console.log(primeNumbers);

  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  // Function to check if a number is prime
function isPrime(num) {

  // Numbers less than or equal to 1 are not prime
  if (num <= 1) return false;

  // 2 and 3 are prime
  if (num <= 3) return true;

  // Numbers divisible by 2 or 3 are not prime
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check for prime using 6k +/- 1 rule for optimization
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  // If none of the above conditions are met, the number is prime
  return true;
}

// Function to get an array of prime numbers from a given array of numbers
function getPrimeNumbers(numbers) {
  return numbers.filter(num => isPrime(num));
}

// Input array of numbers
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Get the prime numbers from the input array
const primeNumbers = getPrimeNumbers(numbers);

// Print the array of prime numbers
console.log(primeNumbers);
  
  */