import { createContext, useContext, useState } from "react";

// Create Context
const CounterContext = createContext();

// Provider Component
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Bonus: log previous changes
  const [history, setHistory] = useState([]);

  const increment = () => {
    setCount((prev) => {
      const newValue = prev + 1;
      setHistory((h) => [...h, `Incremented to ${newValue}`]);
      return newValue;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      const newValue = prev - 1;
      setHistory((h) => [...h, `Decremented to ${newValue}`]);
      return newValue;
    });
  };

  const reset = () => {
    setCount(0);
    setHistory((h) => [...h, "Reset to 0"]);
  };

  return (
    <CounterContext.Provider
      value={{
        count,
        increment,
        decrement,
        reset,
        history,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

// Custom Hook
export const useCounter = () => {
  return useContext(CounterContext);
};