const readlineSync = require('readline-sync');

const numero = parseInt(readlineSync.question('digite qualquer numero: '));

    if (numero % 2 === 0) {
    console.log("esse número é par.");
        } else {
        console.log("esse número é ímpar.");
}
    if (numero > 0) {
    console.log("E o número é positivo.");
        } else if (numero < 0) {
    console.log("E o número é negativo.");

}
