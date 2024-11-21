/*
4. Temporizador com useEffect: Crie um temporizador que conta o tempo em segundos e exiba na tela. 
Use useEffect para iniciar o temporizador ao carregar o componente e useState para atualizar o tempo. 
Desafio: adicione botões para pausar e reiniciar o temporizador.
*/

import React, { useState, useEffect } from 'react';
import "../css/Stopwatch.css";

// Exercício 4 - Temporizador com useEffect
const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const pauseStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetStopwatch = () => {
    setSeconds(0);
    if (isRunning) {
      clearInterval(intervalId);
      startStopwatch();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <section id="stopwatch" style={styles.container}>
      <h2 style={styles.header}>Cronômetro</h2>
      <p style={styles.timeDisplay}>
        {String(Math.floor(seconds / 60)).padStart(2, '0')}:
        {String(seconds % 60).padStart(2, '0')}
      </p>
      <div style={styles.buttonContainer}>
        {!isRunning ? (
          <button style={styles.startButton} onClick={startStopwatch}>
            Iniciar
          </button>
        ) : (
          <button style={styles.pauseButton} onClick={pauseStopwatch}>
            Pausar
          </button>
        )}
        <button style={styles.resetButton} onClick={resetStopwatch}>
          Reiniciar
        </button>
      </div>
    </section>
  );
};

// Estilos em objeto
const styles = {
  container: {
    maxWidth: '300px',
    margin: 'auto',
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  header: {
    color: '#333',
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  timeDisplay: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '20px 0',
    color: '#007BFF',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  startButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  pauseButton: {
    backgroundColor: '#ffc107',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  resetButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default StopWatch;
