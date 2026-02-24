import { useState, useEffect } from "react";
import "./App.css";

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const handleCounter = value => {
    setCounter(c => Math.max(0, c + value * step));
  };

  useEffect(() => {
    function handleKeyShortcut(e) {
      if (e.key === "ArrowUp") handleCounter(1);
      if (e.key === "ArrowDown") handleCounter(-1);
      if (e.key === "r" || e.key === "R") setCounter(0);
      if (e.key === "s" || e.key === "S") setStep(prev => prev + 1);
      if (e.key === "a" || e.key === "A") setStep(prev => Math.max(1, prev - 1));
    }

    window.addEventListener("keydown", handleKeyShortcut);
    return () => window.removeEventListener("keydown", handleKeyShortcut);
  }, []);

  return (
    <div className="container">
      <div className="counter">
        <button onClick={() => handleCounter(-1)}>-</button>
        <span>{counter}</span>
        <button onClick={() => handleCounter(1)}>+</button>

        <input
          type="number"
          value={step}
          onChange={e => setStep(Number(e.target.value) || 1)}
        />

        <button className="reset" onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};