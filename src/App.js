import "./App.css";
import Landing from "./components/Landing.js";
import Brief from "./components/Brief";
import Timeline from "./components/Timeline";
import Details from "./components/Details";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Design Frontiers 2021: Design Co</title>
      </Helmet>
      <div className="App">
        <Landing />
        <Details />
        <Timeline />
        <Brief />
      </div>
    </div>
  );
}

export default App;
