//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes

const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número: "));


for (i = 0; i < 10; i++){
    if (isNaN(num)){
        console.log("Por favor, digite apenas números.");
        break;
    }
    console.log(num);
}