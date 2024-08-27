//Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando o loop for

const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número para ver a tabuada: "));

for (i = 1; i <= 10; i++){
    let soma = num + i;
    let subtracao = num - i;
    let multiplicacao = num * i;
    let divisao = num / i;
    
    console.log(`${num} + ${i} = ${soma} ............ ${num} - ${i} = ${subtracao} ............ ${num} x ${i} = ${multiplicacao} ............ ${num} / ${i} = ${divisao} ............`);
}