import Intro from "./components/Intro";
import Skills from "./components/Skills";
import React from "react";
import Navbar from "./components/Navbar";
import Qualification from "./components/Qualification";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Qualification />
    </div>
  );
}

export default App;
