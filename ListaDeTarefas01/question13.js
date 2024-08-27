/*Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses
números.
*/

const prompt = require('prompt-sync')();

let num;
let soma = 0;
let cont = 0;
let media;

while (num != 0){
    num = Number(prompt("Digite um número: "));
    
    if (isNaN(num)){
        console.log("Por favor, digite apenas números.");
        break;
    }
    
    soma += num;
    cont ++;
}

media = soma / cont;
console.log(`A média aritmética dos números digitados é: ${media}`);