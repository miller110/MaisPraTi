/*Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.
*/

let empresa = {
    departamentos: [
        {nome: "Segurança da Informação", funcionarios: ["Pedro", "Gabriel", "Yara"]},
        {nome: "Arquitetura de Sistemas", funcionarios: ["Leandro", "Talita", "Vinicius"]},
        {nome: "Banco de Dados", funcionarios: ["Jessica", "Fernanda", "Diego"]},
        {nome: "Desenvolvimento de Software", funcionarios: ["Miller", "Neithan", "Lucas"]}
    ]
};

for (let i in empresa.departamentos){
    let departamento = empresa.departamentos[i];
    console.log();
    console.log(`Departamento: ${departamento.nome}`);
    console.log();

    for (let funcionario of departamento.funcionarios){
        console.log(`Nome do funcionário: ${funcionario}`);
    }
}

