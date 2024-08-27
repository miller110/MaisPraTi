/*Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para
implementar a lógica de cada opção selecionada.
*/

const prompt = require('prompt-sync')();

console.log("--------------------Escolha a linguagem de programação que você mais gosta--------------------");
console.log("1. Java");
console.log("2. JavaScript");
console.log("3. Python");

let escolhaDoUsuario = Number(prompt("Digite uma opção (1, 2 ou 3): "));

switch (escolhaDoUsuario){
    case 1:
        console.log("Você escolheu Java! Java é uma linguagem verbosa, mas essa verbosidade traz uma estrutura forte e segura, ideal para grandes projetos corporativos e aplicações de missão crítica.");
        break;
    case 2:
        console.log("Você escolheu JavaScript! JavaScript é a alma da web, permitindo que suas ideias ganhem vida na tela. Com frameworks modernos, você pode criar desde sites interativos até aplicações de servidor robustas.");
        break;
    case 3:
        console.log("Você escolheu Python! Python é conhecida por sua simplicidade e elegância, tornando a programação quase poética. Seja em ciência de dados, inteligência artificial ou desenvolvimento web, Python sempre brilha.");
        break;
    default:
        console.log("Opção inválida! Por favor, digite apenas '1', '2' ou '3'");
}