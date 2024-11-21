/*
8. Galeria de Imagens com Visualização Detalhada: Crie uma galeria simples com uma lista de imagens. 
Quando o usuário clica em uma imagem, exiba-a em uma visualização ampliada em um modal. Use useState
para armazenar a imagem selecionada e renderize o modal condicionalmente. Desafio: adicione um botão 
de “Fechar” no modal e uma funcionalidade de navegação entre as imagens.
*/

import React, { useState } from "react";

// Estilos Inline para simplicidade
const styles = {
  galleryContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px",
  },
  thumbnail: {
    width: "150px",
    height: "100px",
    objectFit: "cover",
    cursor: "pointer",
    borderRadius: "5px",
    border: "2px solid transparent",
    transition: "border 0.3s ease",
  },
  thumbnailActive: {
    border: "2px solid #007BFF",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    position: "relative",
    width: "80%",
    maxWidth: "600px",
  },
  modalImage: {
    width: "100%",
    borderRadius: "10px",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#fff",
    color: "#333",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  navigationButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "1.5rem",
    fontWeight: "bold",
    zIndex: 1010,
  },
  prevButton: {
    left: "10px",
  },
  nextButton: {
    right: "10px",
  },
};

function Images() {
  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
    "https://via.placeholder.com/600x400?text=Image+4",
    "https://via.placeholder.com/600x400?text=Image+5",
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="ex08">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Galeria de Imagens</h1>
      <div style={styles.galleryContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${index + 1}`}
            style={{
              ...styles.thumbnail,
              ...(selectedImageIndex === index && styles.thumbnailActive),
            }}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <img
              src={images[selectedImageIndex]}
              alt={`Imagem ampliada ${selectedImageIndex + 1}`}
              style={styles.modalImage}
            />
            <button style={styles.closeButton} onClick={handleCloseModal}>
              Fechar
            </button>
            <button
              style={{ ...styles.navigationButton, ...styles.prevButton }}
              onClick={handlePrevImage}
            >
              ❮
            </button>
            <button
              style={{ ...styles.navigationButton, ...styles.nextButton }}
              onClick={handleNextImage}
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Images;
