import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";

function App() {
  const [showPara, setShowPara] = useState(false);

  const toggleShow = () => {
    setShowPara((prevShow) => !prevShow);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showPara} />
      <Button onClick={toggleShow}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
