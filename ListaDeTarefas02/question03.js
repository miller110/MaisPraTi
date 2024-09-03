/*Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.
*/

const prompt = require('prompt-sync')();

let valorEspecifico = Number(prompt("Digite um valor: "));

if (isNaN(valorEspecifico)){
    console.error("Por favor, digite apenas números.");
    process.exit();
}

let produto = {
    preco: 150,
    quantidade: 20,
    peso: 10
}

let produtoFiltrado = retornaNovoObjeto(produto, valorEspecifico);

console.log(`As propriedades do produto que estão acima do valor ${valorEspecifico} são:`)
console.log(produtoFiltrado);


function retornaNovoObjeto(produto, valorEspecifico){
    let produtoFiltrado = {};

    for (let propriedade in produto){
        if (produto[propriedade] > valorEspecifico){
            produtoFiltrado[propriedade] = produto[propriedade];
        }
    }
    return produtoFiltrado;
}