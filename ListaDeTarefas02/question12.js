/*Objetivo: Crie um array de objetos minimo, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/

const prompt = require('prompt-sync')();

let minimo = [
    {produto: "Notebook", quantidade: 25, minimo: 0},
    {produto: "Smartphone", quantidade: 25, minimo: 0},
    {produto: "Geladeira", quantidade: 25, minimo: 0},
    {produto: "Teclado", quantidade: 25, minimo: 0},
    {produto: "Mouse", quantidade: 25, minimo: 0}
];

minimo.forEach(item => {
    let valorMinimo = Number(prompt(`Digite o valor mínimo que ${item.produto} deve ter no estoque: `));
    if(isNaN(valorMinimo)){
        console.error("Por favor, digite apenas números.");
        process.exit();
    }

    if (item.quantidade < valorMinimo){
        item.quantidade *= 2;
        console.log(`A quantidade de ${item.produto} foi atualizada para ${item.quantidade}.`);
    }else if(item.quantidade > valorMinimo){
        console.log(`O valor mínimo forncecido é menor do que a quantidade. Então permaneceremos com a quantidade de ${item.quantidade}.`);
    }else{
        console.log(`A quantidade de ${item.produto} permanece a mesma: ${item.quantidade}.`);

    }
});




