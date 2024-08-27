//Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while

const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número: "));
let fatorial = 1;

for (i = num; i >= 1; i--){
    console.log(i);
    fatorial *= i; 
}

console.log(`O fatorial de ${num} é: ${fatorial}`);