/*Escreva um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de
peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else
*/

const prompt = require('prompt-sync')();

let peso = prompt("Digite seu peso: ");
let altura = prompt("Digite sua altura: ");
let imc = peso/altura**2;

if (imc >= 17 && imc < 18.5){
    console.log(`O seu imc é ${imc.toFixed(2)}\nVocê está abaixo do peso`);
} else if (imc >= 18.5 && imc < 24.9){
    console.log(`O seu imc é ${imc.toFixed(2)}\nVocê está com o peso normal`);
} else if (imc >= 25 && imc < 30){
    console.log(`O seu imc é ${imc.toFixed(2)}\nVocê está com sobrepeso`);
} else{
    console.log(`O seu imc é ${imc.toFixed(2)}\nVocê está com obesidade`);
}
