/*Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
*/

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Azul Metálico"
}

for (let propriedade in carro){
    console.log(carro[propriedade]);
}