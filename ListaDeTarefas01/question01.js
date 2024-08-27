// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Por favor, digite um número inteiro: "));

if (numero % 2 == 0){
    console.log(`O número ${numero} é par!`);
} else if (isNaN(numero)){
    console.log("Por favor, digite apenas números.")
} else{
    console.log(`O número ${numero} é ímpar!`);
}