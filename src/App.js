import React from "react";
import CollapseBar from "./components/CollapseBar";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <div className="App container py-3">
      <CollapseBar />
      <Routes />
      {/* <a href="https://www.flaticon.com/free-icons/fish" title="fish icons">Fish icons created by Freepik - Flaticon</a> */}
    </div>
  );
}

export default App;
