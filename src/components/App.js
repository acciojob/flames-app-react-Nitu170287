import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [result, setResult] = useState("");

  function handleCalculateBtn() {
    if (!firstName || !secondName) {
      setResult("Please enter valid input");
    } else {
      let newFname = firstName;
      let newSname = secondName;
      for (let char of newFname) {
        if (newSname.includes(char)) {
          newSname = newSname.replace(char, "");
          newFname = newFname.replace(char, "");
        }
      }
      let strTotalLen = newFname.length + newSname.length;
      switch (strTotalLen % 6) {
        case 1:
          setResult("Friends");
          break;
        case 2:
          setResult("Love");
          break;
        case 3:
          setResult("Affection");
          break;
        case 4:
          setResult("Marriage");
          break;
        case 5:
          setResult("Enemy");
          break;
        case 0:
          setResult("Siblings");
          break;
      }
    }
  }
  function hadleClearBtn() {
    setFirstName("");
    setSecondName("");
    setResult("");
  }

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <input
        type="text"
        placeholder="Enter first name"
        onChange={(e) => setFirstName(e.target.value.toLowerCase())}
        value={firstName}
      />
      <input
        type="text"
        placeholder="Enter Second name"
        onChange={(e) => setSecondName(e.target.value.toLowerCase())}
        value={secondName}
      />
      <button onClick={handleCalculateBtn}>
        Calculate Relationship Future
      </button>
      <button onClick={hadleClearBtn}>Clear</button>
      <h3>{result}</h3>
    </div>
  );
};

export default App;
