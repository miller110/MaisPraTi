/*Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/

let carrinho = {
    itens: [
    {nome: "Pipoca", quantidade: 10, precoUnitario: 2.00}, 
    {nome: "Arroz", quantidade: 5, precoUnitario: 5.00}, 
    {nome: "Feijão", quantidade: 3, precoUnitario: 7.00}
    ]
};

let valorTotal = 0;

carrinho.itens.forEach(item =>{
    valorTotal += item.quantidade * item.precoUnitario;
});

console.log(`O valor total do carrinho é: R$ ${valorTotal}`);


