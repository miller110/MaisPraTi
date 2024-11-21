import React, { useState } from "react";
import "../css/ChangeColor.css";

// Exercício 2 - Alteração de cor de fundo
function ChangeColor() {
  
  // Função para gerar uma cor de fundo aleatória
  function randomBgColor() {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <section id="ex02" style={{ textAlign: "center", padding: "2rem" }}>
        <p>Clique para alterar a cor</p>
        <button id="changeBgColorButton" onClick={randomBgColor}>Mudar cor</button>
      </section>
    </>
  );
}

export default ChangeColor;
