import "./App.css";
import Landing from "./components/Landing.js";
import Brief from "./components/Brief";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div>
      <div className="App">
        <Landing></Landing>
        <Timeline />
        <Brief />
      </div>
    </div>
  );
}

export default App;
