//Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for

const prompt = require('prompt-sync')();

let soma = 0;
console.log("Por favor, digite 5 números.");

for(let i = 1; i <= 5; i++){
    let num = Number(prompt(`Digite o ${i}º número: `));
    if (isNaN(num)){
        console.log("Por favor, digite apenas números.");
        break;
    }
    soma += num;
}

console.log(`A soma total dos números digitados é: ${soma}`);
