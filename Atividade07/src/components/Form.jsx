/*
6. Formulário de Registro Simples: Crie um formulário com campos de nome, e-mail e senha. 
Ao enviar o formulário, exiba uma mensagem de boas-vindas usando as informações digitadas. 
Use useState para armazenar os valores dos campos e exiba a mensagem em um novo componente 
de boas-vindas. Desafio: adicione validações para garantir que todos os campos 
estejam preenchidos antes de enviar.
*/

import React, { useState } from "react";
import "../css/Form.css";

// Componente de Mensagem de Boas-Vindas
function WelcomeMessage({ name }) {
  return (
    <div style={styles.welcomeContainer}>
      <h2 style={styles.welcomeTitle}>Bem-vindo, {name}!</h2>
      <p style={styles.welcomeText}>Estamos felizes em ter você aqui.</p>
    </div>
  );
}

// Componente de Formulário de Registro
function Form() {
  // Estados para armazenar os valores dos campos
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !email || !password) {
      setMessage("Por favor, preencha todos os campos.");
      return;
    }

    setMessage("");
    setFormSubmitted(true);
  }

  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Formulário de Registro</h1>

      {!formSubmitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              placeholder="Digite seu nome"
            />
          </div>

          <div style={styles.field}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Digite seu email"
            />
          </div>

          <div style={styles.field}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Digite sua senha"
            />
          </div>

          {message && <p style={styles.error}>{message}</p>}

          <button type="submit" style={styles.submitButton}>
            Enviar
          </button>
        </form>
      ) : (
        <WelcomeMessage name={name} />
      )}
    </section>
  );
}

// Estilos em objeto
const styles = {
  container: {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  error: {
    color: "#d9534f",
    fontSize: "0.9rem",
    margin: "10px 0",
  },
  submitButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "10px",
  },
  submitButtonHover: {
    backgroundColor: "#0056b3",
  },
  welcomeContainer: {
    padding: "20px",
    textAlign: "center",
  },
  welcomeTitle: {
    fontSize: "1.8rem",
    color: "#28a745",
  },
  welcomeText: {
    fontSize: "1rem",
    color: "#555",
  },
};

export default Form;
