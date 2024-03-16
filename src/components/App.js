import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={Properties} />
          <Route path="/" element={AddProperties} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
