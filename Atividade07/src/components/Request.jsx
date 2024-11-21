/*
7. Aplicação de Requisição de Dados Simples: Crie um componente que exiba uma lista de posts 
obtidos de uma API pública (como JSONPlaceholder). Use useEffect para fazer a requisição ao
carregar o componente e exiba os posts em uma lista. Desafio: adicione um botão para
recarregar os dados e um indicador de carregamento enquanto a requisição está sendo
feita.
*/

import React, { useState, useEffect } from "react";

// Estilos Inline para simplicidade
const styles = {
  container: {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#333",
  },
  postList: {
    listStyleType: "none",
    padding: 0,
  },
  postItem: {
    marginBottom: "20px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#fff",
    textAlign: "left",
  },
  postTitle: {
    fontSize: "1.2rem",
    color: "#007BFF",
  },
  postBody: {
    color: "#555",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonDisabled: {
    backgroundColor: "#6c757d",
    cursor: "not-allowed",
  },
  loading: {
    fontSize: "1.1rem",
    color: "#007BFF",
  },
  error: {
    fontSize: "1rem",
    color: "#d9534f",
  },
};

function Request() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      if (!response.ok) {
        throw new Error("Erro ao carregar posts");
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lista de Posts</h1>

      {isLoading && <p style={styles.loading}>Carregando...</p>}

      {error && <p style={styles.error}>Erro: {error}</p>}

      <ul style={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} style={styles.postItem}>
            <h2 style={styles.postTitle}>{post.title}</h2>
            <p style={styles.postBody}>{post.body}</p>
          </li>
        ))}
      </ul>

      <button
        onClick={fetchPosts}
        style={{
          ...styles.button,
          ...(isLoading && styles.buttonDisabled),
        }}
        disabled={isLoading}
      >
        {isLoading ? "Recarregando..." : "Recarregar Posts"}
      </button>
    </div>
  );
}

export default Request;
