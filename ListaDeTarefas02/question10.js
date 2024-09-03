/*Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.
*/

let vendas = [
    {produto: "Notebook", quantidade: 1, valor: 2250},
    {produto: "Caderno", quantidade: 4, valor: 100},
    {produto: "Teclado", quantidade: 2, valor: 450}
]

let totalVendas = 0;

vendas.forEach(venda =>{
    totalVendas += (venda.valor * venda.quantidade);
})

console.log(`O valor total das vendas é: R$ ${totalVendas.toFixed(2)}`);
