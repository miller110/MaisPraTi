/*Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
*/

let produtos = [
    {nome: "Iphone 12", preco: 3800, desconto: 0},
    {nome: "Notebook", preco: 4300, desconto: 0},
    {nome: "Geladeira", preco: 3145, desconto: 0}
]

produtos.forEach(produto =>{
    let novoPreco;
    produto.desconto = produto.preco * 0.10;
    novoPreco = produto.preco - produto.desconto;
    console.log(`Produto: ${produto.nome}\nPreço sem desconto: R$ ${produto.preco.toFixed(2)}\nPreço com desconto: R$ ${novoPreco.toFixed(2)}`);
    console.log();
})