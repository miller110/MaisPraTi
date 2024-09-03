/*Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/

let pedidos = [
    {cliente: "Miller", produto: "Playstation 5", quantidade: 1},
    {cliente: "Geovana", produto: "Notebook", quantidade: 2},
    {cliente: "Guilherme", produto: "Microondas", quantidade: 2},
    {cliente: "Gabriela", produto: "Mouse", quantidade: 3},
    {cliente: "Eduardo", produto: "HD externo", quantidade: 1}
];

let quantidadeProdutoCliente = {};

pedidos.forEach(pedido =>{
    if (quantidadeProdutoCliente[pedido.cliente]){
        quantidadeProdutoCliente[pedido.cliente] += pedido.quantidade;
    } else {
        quantidadeProdutoCliente[pedido.cliente] = pedido.quantidade;
    }
});

console.log(quantidadeProdutoCliente);