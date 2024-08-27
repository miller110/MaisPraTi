/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreva-os em ordem
crescente
*/

const prompt = require('prompt-sync')();

let valor1 = Number(prompt("Digite um número: "));
let valor2 = Number(prompt("Digite outro número: "));

if (isNaN(valor1, valor2)){
    console.log("Entrada inválida! Por favor digite apenas números.");
}

if (valor1 === valor2){
    console.log("Por favor, preciso que o primeiro valor seja diferente do segundo valor.");
} else if(valor1 < valor2){
    console.log(`Os valores em ordem crescente são: ${valor1} e ${valor2}`);
} else{
    console.log(`Os valores em ordem crescente são: ${valor2} e ${valor1}`)
}


