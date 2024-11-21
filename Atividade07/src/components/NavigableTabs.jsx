/*
10.Componentes com Tabs Navegáveis: Crie uma interface de “tabs” (abas) onde cada aba exibe um conteúdo diferente
ao ser clicada (por exemplo, uma aba “Sobre” e uma aba “Contato”). Use useState para controlar qual aba está 
ativa e renderize o conteúdo de acordo com a aba selecionada. Desafio: Adicione um efeito visual que destaque
a aba ativa.
*/

import React, { useState } from "react";

// Estilos inline para simplificar
const styles = {
  tabsContainer: {
    display: "flex",
    marginBottom: "20px",
    cursor: "pointer",
  },
  tab: {
    padding: "10px 20px",
    marginRight: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f0f0f0",
    transition: "background-color 0.3s",
  },
  activeTab: {
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
};

function NavigableTabs() {
  const [activeTab, setActiveTab] = useState("sobre");

  // Função para alterar a aba ativa
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div style={styles.tabsContainer}>
        <div
          style={{
            ...styles.tab,
            ...(activeTab === "sobre" ? styles.activeTab : {}),
          }}
          onClick={() => handleTabClick("sobre")}
        >
          Sobre
        </div>
        <div
          style={{
            ...styles.tab,
            ...(activeTab === "contato" ? styles.activeTab : {}),
          }}
          onClick={() => handleTabClick("contato")}
        >
          Contato
        </div>
      </div>

      <div style={styles.content}>
        {activeTab === "sobre" && <p>Bem-vindo à seção Sobre! Aqui você encontra informações sobre nós.</p>}
        {activeTab === "contato" && <p>Entre em contato conosco através do formulário abaixo.</p>}
      </div>
    </div>
  );
}

export default NavigableTabs;
