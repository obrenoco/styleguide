import React from "react";
import { Accordion } from "./components/Accordion/accordion";
import { Header } from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Accordion title="Hello" children={<div>AAAAAAAAAAAAAAAAAH</div>} />
    </div>
  );
}

export default App;
