const leia = require('readline-sync');

let quantidade;
let altura;
let tipo;
let nome;
let resposta;

quantidade = leia.questionInt("Digite um valor inteiro: " , {limitMessage: "Digite um numeo inteiro"});
console.log ("O valor inteiro digitado foi: " + quantidade);
