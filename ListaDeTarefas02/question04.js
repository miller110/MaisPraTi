/*Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.
*/

const pessoas = [
    {nome: "Miller", idade: 23, cidade: "Coaraci"},
    {nome: "Amanda", idade: 21, cidade: "São Paulo"},
    {nome: "Neithan", idade: 27, cidade: "Recife"}
]

for (let pessoa of pessoas){
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}