import { useCounter } from "../context/CounterContext";

function CounterControls() {
  const { increment, decrement, reset } = useCounter();

  return (
    <div>
      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterControls;