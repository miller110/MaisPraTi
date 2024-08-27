/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos
doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
*/

const prompt = require('prompt-sync')();

let qnt = Number(prompt("Digite a quantidade de maças que deseja comprar: "));

if (isNaN(qnt)|| Number(qnt) < 0){
    console.log("Entrada inválida. Por favor, insira um número positivo.");
} else{
    qnt = Number(qnt);

    if (qnt < 12){
        console.log(`Valor total da compra: ${qnt*0.30} R$ `);
    } else {
        console.log(`Valor total da compra: ${qnt*0.25} R$`);
    }
}