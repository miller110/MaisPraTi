/*
5. Filtro de Lista: Crie um componente que renderiza uma lista de nomes. Adicione um campo
 de entrada para filtrar os nomes com base no texto digitado. Use useState para controlar o 
 valor do filtro e map para exibir apenas os itens que correspondem ao filtro. 
 Desafio: ignore maiúsculas e minúsculas ao filtrar.
*/

import React, { useState } from "react";
import "../css/Filter.css";


function Filter() {
  const [characters] = useState([
    "Adriana",
    "Julia",
    "Douglas",
    "Thiago",
    "Silvia",
    "Anderson",
    "Luigi",
    "Mario",
    "Roberta",
    "Tereza",
  ]);

  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Filtro de Lista</h2>
      <input
        type="text"
        placeholder="Digite o nome"
        value={filter}
        onChange={handleFilterChange}
        style={styles.input}
      />
      <ul style={styles.list}>
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character, index) => (
            <li key={index} style={styles.listItem}>
              {character}
            </li>
          ))
        ) : (
          <li style={styles.noResult}>Nenhum nome encontrado</li>
        )}
      </ul>
    </section>
  );
}

// Estilos em objeto
const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fdfdfd",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "15px",
    color: "#333",
  },
  input: {
    width: "90%",
    padding: "10px",
    border: "1px solid #aaa",
    borderRadius: "5px",
    marginBottom: "20px",
    fontSize: "1rem",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
    backgroundColor: "#e9f7fa",
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "#007BFF",
  },
  noResult: {
    color: "#dc3545",
    fontSize: "1.1rem",
    marginTop: "10px",
  },
};

export default Filter;
