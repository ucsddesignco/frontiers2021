import "./App.css";
import Landing from "./components/Landing.js";
import Brief from "./components/Brief";
import Timeline from "./components/Timeline";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <div className="App">
        <Landing></Landing>
        <Details />
        <Timeline />
        <Brief />
      </div>
    </div>
  );
}

export default App;
