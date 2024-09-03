/*Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.
*/

let alunos = [
    {nome: "Miller", nota1: 10, nota2: 10},
    {nome: "Samira", nota1: 8, nota2: 9},
    {nome: "Louise", nota1: 9, nota2: 5},
    {nome: "Melinda", nota1: 8, nota2: 10},
    {nome: "Pedro", nota1: 3, nota2: 5}
]

for (aluno of alunos){
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome do aluno: ${aluno.nome}\nMédia: ${media}`);
}