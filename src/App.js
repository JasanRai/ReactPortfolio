import DrawerLeft from "./components/DrawerLeft";
import Info from "./components/Info";
import Skills from "./components/Skills";
import React from "react";
import Navbar from "./components/Navbar";
import Qualification from "./components/Qualification";

function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <Skills />
      <Qualification />
    </div>
  );
}

export default App;
