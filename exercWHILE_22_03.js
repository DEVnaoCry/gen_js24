const readlineSync = require('readline-sync');

//os contadores:
let menorQue21 = 0, maiorQue50 = 0;

//loop de coleta de dado
while (true) {
    let idade = readlineSync.questionInt('Digite a idade (digite um numero negativo pra sair): ');
   
    if (idade < 0) break; // Saída
    if (idade < 21) menorQue21++; //se a idade for menor que 21
    if (idade > 50) maiorQue50++; //se for maior que 50
}

console.log(`jovens com menos de 21 anos: ${menorQue21}`); //resultados
console.log(`coroas com mais de 50 anos: ${maiorQue50}`);
