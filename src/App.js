import './App.css';
import React from 'react';
import Home from "./Home/Home.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from "./Projects/Projects.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
