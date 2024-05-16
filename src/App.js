import "./App.css";
import React, { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const colorArray = ["purple", "fuchsia"];

  function handleFuchsia() {
    setIsClicked(true);
  }

  function handlePurple() {
    setIsClicked();
  }

  return (
    <div
      className="App"
      style={{
        backgroundColor: isClicked ? colorArray[1] : colorArray[0],
      }}
    >
      <h1 style={{ color: isClicked ? "black" : "white" }}>
        Color toggle switch
      </h1>

      <button className="fuchsia" onClick={handleFuchsia}>
        fuschia
      </button>
      <button className="purple" onClick={handlePurple}>
        purple
      </button>
    </div>
  );
}

export default App;
