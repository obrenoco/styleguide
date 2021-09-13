import React from "react";
import { Accordion } from "./components/accordion/accordion";

function App() {
  return (
    <div className="App">
      <Accordion title="Hello" children={<div>AAAAAAAAAAAAAAAAAH</div>} />
    </div>
  );
}

export default App;
