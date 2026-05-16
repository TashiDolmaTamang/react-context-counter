import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import { useCounter } from "./context/CounterContext";

function App() {
  const { history } = useCounter();

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Context Counter App</h1>

      {/* First Display */}
      <CounterDisplay />

      <CounterControls />

      {/* Second Display (Bonus) */}
      <h3>Second Counter Display</h3>
      <CounterDisplay />

      {/* History Log */}
      <h3>History Log</h3>

      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;