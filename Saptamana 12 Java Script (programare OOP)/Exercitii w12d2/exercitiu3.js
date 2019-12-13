//(https://codepen.io/oviduzz/pen/eaJRqz?editors=0010)

//1. creati o clasa Account care sa aiba location si name la constructor
//2. creati o clasa Transaction care sa aiba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga tranzactiile pe care o sa le creem mai tarziu


let transaction1 = new Transaction('Trump', 'ING', 3500, '09988766');
let transaction2 = new Transaction('Dragnea', 'BT', 12000, '09912766');
let transaction3 = new Transaction('Mama', 'Raiffeisen', 500, '45688766');

// const bankAccount = ...;
// const transaction1 = ...;
// const transaction2 = ...;
// const table = ...;
// table.addTransaction(...)
// console.log(table)