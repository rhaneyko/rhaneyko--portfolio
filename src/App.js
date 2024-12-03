import React from "react";

import "./App.css";

import Header from "./components/Header";
import HomePage from "./components/Pages/HomePage";
import SkillsPage from "./components/Pages/SkillsPage";
import ProjectsPage from "./components/Pages/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <SkillsPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
