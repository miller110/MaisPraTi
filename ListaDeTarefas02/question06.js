/*Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
*/

const prompt = require('prompt-sync')();

let valorEspecifico = Number(prompt("Digite o valor de um salário: "));

if(isNaN(valorEspecifico)){
    console.error("Por favor, digite apenas números.");
    process.exit();
}

let funcionarios = [
    {nome: "Miller", cargo: "Dev FullStack Júnior", salario: 3000},
    {nome: "Júnior", cargo: "Analista de Dados Júnior", salario: 2700},
    {nome: "Fernanda", cargo: "Biomédica", salario: 3400}
]

let funcionariosFiltrados = [];

for (let funcionario of funcionarios){
    if (funcionario.salario > valorEspecifico){
        funcionariosFiltrados.push(funcionario);
    }
}

console.log(funcionariosFiltrados);


