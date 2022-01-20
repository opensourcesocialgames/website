import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import AppHeader from "./components/AppHeader";
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
