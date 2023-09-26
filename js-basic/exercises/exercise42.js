/*
# Esercizio 42

Scrivere un funzione di nome `Smartphone` che prenda come parametro i seguenti elementi: `brand`,`name`, `price`. Questa funzione, ogni volta che viene chiamata con new, deve restituire un nuovo oggetto smartphone, con le informazioni (parametri) che passiamo

Indicazioni utili:

- Ricordati che `brand` e `name` saranno stringhe e `price` sarà un numero
- Crea almeno due 'Smartphone' con informazioni diverse


 */



//--------------------------------------------------------------------

//ASNWER

function Smartphone (brand,price,name,) {
    this.brand = brand;
    this.price = price; 
    this.name = name;
}

let apple = new Smartphone ("Apple",1599,"Iphone 14 pro max");

let samsung = new Smartphone ("Samsung",1199,"Galaxy Z Flip5");

console.log (apple);
console.log (samsung);

//this is just an add on 
// it's here just in case u wanted to know which was more expensive. 
if (apple.price > samsung.price) {
    console.log (apple.name + " this is expensive as sht!!");
} else {
    console.log (samsung.name + " this is expensive as sht!!");  
}