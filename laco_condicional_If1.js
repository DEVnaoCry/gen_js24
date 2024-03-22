const readlineSync = require('readline-sync');

const A = readlineSync.question('Digite o valor de A: ');
const B = readlineSync.question('Digite o valor de B: ');
const C = readlineSync.question('Digite o valor de C: ');

const soma = parseInt(A) + parseInt(B);

if (soma > parseInt(C)) {
    console.log("A soma de A + B é maior que C.");
} else if (soma < parseInt(C)) {
    console.log("A soma de A + B é menor que C.");
} else {
    console.log("A soma de A + B é igual a C.");
}
