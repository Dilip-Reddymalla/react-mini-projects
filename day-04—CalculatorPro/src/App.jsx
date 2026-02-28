import { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [isOff, setIsOff] = useState(false);

  const handleClick = (char) => {
    if (isOff) return;

    const last = value.slice(-1);
    const isOp = "+-*/".includes(char);

    if (isOp) {
      if (value === "" || "+-*/".includes(last)) {
        return;
      }
    }

    if (char === ".") {
      const lastNumber = value.split(/[+\-*/]/).pop();
      if (lastNumber.includes(".")) return;
    }

    setValue((v) => v + char);
  };

  const handleEqualClick = () => {
    if (isOff || value === "") return;

    try {
      const result = evaluate(value);

      if (!isFinite(result)) {
        setValue("Error");
        return;
      }

      setValue(String(result));
    } catch {
      setValue("Error");
    }
  };

  const powerOff = () => {
    setValue("OFF");
    setIsOff(true);
  };

  const powerOn = () => {
    setValue("");
    setIsOff(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOff && e.key.toLowerCase() !== "o") return;

      if (e.key === "Enter") {
        handleEqualClick();
      } else if (e.key === "Backspace") {
        setValue((prev) => prev.slice(0, -1));
      } else if (e.key === "Escape") {
        powerOff();
      } else if (e.key.toLowerCase() === "o") {
        powerOn();
      } else if ("0123456789+-*/.".includes(e.key)) {
        handleClick(e.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [value, isOff]);

  return (
    <>
      <h1>Calculator Pro</h1>
      <div className="display">
        <input type="text" value={value} disabled />
      </div>
      <div className="grid-container">
        {/* Row 1 */}
        <button className="span-two" onClick={() => setValue("")}>
          AC
        </button>

        <button
          onClick={() => {
            if (value !== "") setValue(value.slice(0, -1));
          }}
        >
          DEL
        </button>

        <button className="power" onClick={powerOff}>
          OFF
        </button>

        {/* Row 2 */}
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>÷</button>

        {/* Row 3 */}
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>×</button>

        {/* Row 4 */}
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>−</button>

        {/* Row 5 */}
        <button className="span-two" onClick={() => handleClick("0")}>
          0
        </button>

        <button onClick={() => handleClick(".")}>.</button>

        <button onClick={() => handleClick("+")}>+</button>

        {/* Row 6 */}
        <button className="equals span-three" onClick={handleEqualClick}>
          =
        </button>

        <button onClick={powerOn}>ON</button>
      </div>
    </>
  );
}

export default App;
