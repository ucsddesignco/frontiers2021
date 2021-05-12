import "./App.css";
import Brief from "./components/Brief";
import Timeline from "./components/Timeline";
import Landing from "./components/Landing";

function App() {
  return (
    <div>
      <div className="App">
        <Landing />
        <Timeline />
        <Brief />
      </div>
    </div>
  );
}

export default App;
