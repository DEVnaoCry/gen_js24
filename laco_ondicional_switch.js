const readlineSync = require('readline-sync');

const produtos = {
    1: { nome: 'Cachorro Quente', preco: 10.00 },
    2: { nome: 'X-Salada', preco: 15.00 },
    3: { nome: 'X-Bacon', preco: 18.00 },
    4: { nome: 'Bauru', preco: 12.00 },
    5: { nome: 'Refrigerante', preco: 8.00 },
    6: { nome: 'Suco de laranja', preco: 13.00 }
};

const codigo = parseInt(readlineSync.question('Digite o codigo do produto: '));
const quantidade = parseInt(readlineSync.question('Digite a quantidade: '));

if (produtos[codigo]) {
    const valorTotal = quantidade * produtos[codigo].preco;
    console.log(`Produto comprado: ${produtos[codigo].nome}\nValor total: R$ ${valorTotal.toFixed(2)}`);
} else {
    console.log('codigo do produto não existe.');
}
