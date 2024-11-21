/*
9. Timer com Intervalo e Alerta: Crie um timer onde o usuário define a quantidade de segundos para a contagem 
regressiva e, ao iniciar, o tempo é exibido e diminui a cada segundo. Use useState para armazenar o tempo e 
useEffect para iniciar a contagem regressiva ao iniciar o timer. Ao chegar a zero, exiba um alerta informando 
que o tempo acabou. Desafio: Adicione botões para pausar e reiniciar o timer.
*/

import React, { useState, useEffect } from "react";

// Estilos inline para simplificar
const styles = {
  timerContainer: {
    textAlign: "center",
    marginTop: "50px",
  },
  input: {
    width: "150px",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    margin: "5px",
    borderRadius: "5px",
    border: "none",
  },
  timeDisplay: {
    fontSize: "40px",
    fontWeight: "bold",
  },
};

function TimerAlert() {
  const [time, setTime] = useState(0); // Tempo em segundos
  const [isActive, setIsActive] = useState(false); // Controla se o timer está ativo ou não
  const [secondsLeft, setSecondsLeft] = useState(0); // Tempo restante
  const [intervalId, setIntervalId] = useState(null); // Armazena o id do setInterval para poder limpar

  useEffect(() => {
    // Quando o timer chegar a zero, mostrar um alerta
    if (secondsLeft === 0 && isActive) {
      alert("O tempo acabou!");
      setIsActive(false);
      clearInterval(intervalId);
    }

    // Iniciar a contagem regressiva
    if (isActive && secondsLeft > 0) {
      const id = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
      setIntervalId(id);

      // Limpar intervalo ao sair do componente ou pausar
      return () => clearInterval(id);
    }
  }, [isActive, secondsLeft, intervalId]);

  // Função para iniciar o timer
  const startTimer = () => {
    if (time > 0) {
      setSecondsLeft(time);
      setIsActive(true);
    }
  };

  // Função para pausar o timer
  const pauseTimer = () => {
    setIsActive(false);
    clearInterval(intervalId);
  };

  // Função para reiniciar o timer
  const resetTimer = () => {
    setIsActive(false);
    clearInterval(intervalId);
    setSecondsLeft(0);
    setTime(0);
  };

  return (
    <div style={styles.timerContainer}>
      <h1>Timer com Intervalo e Alerta</h1>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        style={styles.input}
        placeholder="Defina o tempo (segundos)"
      />
      <div style={styles.timeDisplay}>
        {secondsLeft > 0 ? secondsLeft : "00"}
      </div>
      <div>
        {!isActive ? (
          <button onClick={startTimer} style={styles.button}>
            Iniciar
          </button>
        ) : (
          <button onClick={pauseTimer} style={styles.button}>
            Pausar
          </button>
        )}
        <button onClick={resetTimer} style={styles.button}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default TimerAlert;
