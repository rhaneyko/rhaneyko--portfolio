import React from "react";

import "./App.css";

import Header from "./components/Header";
import HomePage from "./components/Pages/HomePage";
import SkillsPage from "./components/Pages/SkillsPage";
import ProjectsPage from "./components/Pages/ProjectsPage";
import ContactPage from "./components/Pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage/>
    </div>
  );
}

export default App;
