//Leia quatro valores float(n1,n2,n3,n4). A seguir, calcule e mostre a diferença do
//produto entre o n1 e n2 pelo produto entre o n3 e o n4. Veja os exemplos abaixo:

const leia = require('readline-sync')

    let n1,n2,n3,n4;

        n1 = leia.questionFloat('Digite o primeiro número: ');
        n2 = leia.questionFloat('\nDigite o segundo número: ');
        n3 = leia.questionFloat('\nDigite o terceiro número: ');
        n4 = leia.questionFloat('\nDigite o quarto número: ');

    diferenca = (n1*n2) - n3*n4;

    
                console.log('\n A diferença dos numeros "1" e "2" para "3" e "4" é: ' + diferenca);