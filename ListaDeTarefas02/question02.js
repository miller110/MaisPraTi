/*Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

let livro = {
    titulo: "Harry Potter e o Prisioneiro de Azkaban",
    autor: "J.K Rowling",
    anoPublicacao: 1999,
    genero: "Ficção"
}

let editoraNaoExiste = true;

for (let propriedade in livro){
    if (propriedade === "editora"){
        editoraNaoExiste = false;
        break;
    }
}

if (editoraNaoExiste){
    livro.editora = "Rocco";
}

console.log(livro);


