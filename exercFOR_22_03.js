const readlineSync = require('readline-sync');

let numerosPares = 0;
let numerosImpares = 0;

for (let i = 1; i <= 10; i++) {

    let numero = readlineSync.questionInt(`Digite o ${i} numero: `);
    
    if (numero % 2 === 0) {
        numerosPares++;
    } else {
        numerosImpares++;
    }
}
console.log(`Numeros pares: ${numerosPares}`);
console.log(`Nmeros impares: ${numerosImpares}`);
