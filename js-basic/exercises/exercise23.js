/*
# Esercizio 23

- Crea, tramite costrutto switch, un controllo che stampi in console il prezzo di una camera d'albergo in base alle seguenti tariffe:

Tariffa BB --> 50€
Tariffa HB --> 80€
Tariffa FB --> 100€

 */



//--------------------------------------------------------------------

//ASNWER

let price = 50;

switch (price){
    case 50:
    console.log("this is a BB");
    break;
    case 80:
    console.log("this is a HB");
    break;
    case 100:
    console.log("this is a FB");
    break;
    default:
    console.log("this room dosen't exist")
}