const readlineSync = require('readline-sync');

let soma = 0;
let numero;

do {
    numero = readlineSync.questionInt('Digite um numero (0 para sair): ');
    
    if (numero > 0) {
        soma += numero;
    }
    
} while (numero !== 0);

console.log(`A soma dos numeros positivos é: ${soma}`);
