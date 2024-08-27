/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente
um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou equilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A = B ou A = C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo equilátero: possui todos os lados iguais (A = B e B = C)
*/

const prompt = require('prompt-sync')();

let A = Number(prompt("Informe o valor do lado A do triângulo: "));
let B = Number(prompt("Informe o valor do lado B do triângulo:  "));
let C = Number(prompt("Informe o valor do lado C do triângulo:  "));


let verificarTriangulo = (A < B + C && B < A + C && C < A + B) ? "Os valores fornecidos formam um triângulo" : "Os valores fornecidos não formam um triângulo.";

console.log(verificarTriangulo);


if (verificarTriangulo === "Os valores fornecidos formam um triângulo"){
    if (A === B && B === C){
        console.log("O triângulo é equilátero, pois possui todos os lados iguais.");
    } else if (A === B || A === C || B === C){
        console.log("O triângulo é isósceles, pois possui dois lados iguais.");
    } else {
        console.log("O triângulo é escaleno, pois possui todos os lados diferentes");
    }
}

