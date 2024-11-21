import React, { useState } from "react";
import "../css/Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <section id="ex01">
        <p>Contagem: {count}</p>
        <button id="increaseButton" onClick={increaseCount}>Incrementar</button>
        <button id="decreaseButton" onClick={decreaseCount}>Decrementar</button>
      </section>
    </>
  );
}

export default Counter;
