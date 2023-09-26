/*
# Esercizio 40

Partendo dall'esercizio precedente, conosci altri modi per copiare l'oggetto `user` senza modificare le sue proprietà?

Indicazioni utili:

- Questa volta non ti servirà il ciclo `for in`
- Ti servirà una nuova copia dell'oggetto `user`
- Potresti trovare delle info utili qui: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign?retiredLocale=it

let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);

 */

//--------------------------------------------------------------------


//ASNWER

let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = Object.assign({}, user);

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
