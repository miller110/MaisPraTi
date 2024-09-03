/*Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/

let filmes = [
    {titulo: "Peter Pan", diretor: "Hamilton Luske", anoLancamento: 2003},
    {titulo: "Titanic", diretor: "James Cameron", anoLancamento: 2010},
    {titulo: "Homem Aranha", diretor: "Sam Raimi", anoLancamento: 2004}
]

let tituloDosFilmes = [];

filmes.forEach(filme =>{
    tituloDosFilmes.push(filme.titulo);
});

console.log(`Títulos dos filmes:${tituloDosFilmes}`);

