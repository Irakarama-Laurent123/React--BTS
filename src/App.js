import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleShow = useCallback(() => {
    if (allowToggle) {
      setShowPara((prevShow) => !prevShow);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showPara} />
      <Button onClick={allowToggleHandler}>Allowing Toggling</Button>
      <Button onClick={toggleShow}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
