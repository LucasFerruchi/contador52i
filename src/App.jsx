import "./App.css";
import Contador from "./components/Contador";

function App() {
  return (
    <>
      <Contador inicialState={5} />
      <Contador inicialState={10} mensaje="hola" />
    </>
  );
}

export default App;
