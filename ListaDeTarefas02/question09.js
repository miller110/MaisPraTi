/*Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
*/

let clientes = [
    {nome: "Miller", idade: 23, cidade: "Coaraci"},
    {nome: "Geise", idade: 32, cidade: "Belo Horizonte"},
    {nome: "Eduarda", idade: 19, cidade: "São Paulo"}
];

let clienteMais30 = 0;

clientes.forEach(cliente =>{
    if (cliente.idade > 30){
        clienteMais30++;
    }
});

console.log(`Quantidade de clientes acima de 30 anos: ${clienteMais30}`);


