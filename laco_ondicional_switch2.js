const readlineSync = require('readline-sync');

let saldo = 1000.00; // Saldo inicial
const operacao = parseInt(readlineSync.question("Digite o tipo de operacao (1 para saldo, 2 para saque, 3 para deposito): "));

switch (operacao) {
    case 1:
        console.log(`Seu saldo atual é: R$ ${saldo.toFixed(2)}`);
        break;
    case 2:
        const saque = parseFloat(readlineSync.question("Digite o valor do saque: "));
        if (saque > saldo) console.log("Voce tá duro, e quer fazer saque?");
        else {
            saldo -= saque;
            console.log(`Saque realizado. Seu novo saldo é: R$ ${saldo.toFixed(2)}`);
        }
        break;
    case 3:
        saldo += parseFloat(readlineSync.question("Digite o valor do deposito: "));
        console.log(`Deposito realizado. Seu novo saldo é: R$ ${saldo.toFixed(2)}`);
        break;
    default:
        console.log("Operação Inválida!");
}
