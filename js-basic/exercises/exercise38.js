/*
# Esercizio 38

Partendo dall'oggetto precedente, scrivi un ciclo `for in` dove stampiamo le chiavi dell'oggetto `car`

Indicazioni utili:

- Il risultato sarà la chiave delle proprietà stampate a terminale

 */



//--------------------------------------------------------------------

//ASNWER

let car= {

    name: "jeep wrangler",
    color: "Matt black",
};

for (const variable in car ){

    console.log(variable);
}