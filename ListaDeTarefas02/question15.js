/*Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.
*/

const prompt = require('prompt-sync')();

let transacoes = [
    {tipo: "entrada", valor: 100},
    {tipo: "entrada", valor: 200},
    {tipo: "entrada", valor: 300},
    {tipo: "saida", valor: 400}
];


let saldoFinal = 0;

transacoes.forEach(transacao =>{
    if (transacao.tipo === "entrada"){
        saldoFinal += transacao.valor;
    } else if (transacao.tipo === "saida"){
        saldoFinal -= transacao.valor;
    } else {
        console.log("Dados inválidos!");
    }
});

console.log(`O saldo final é: R$ ${saldoFinal}`);
