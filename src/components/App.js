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
        data-testid="input1"
        name="name1"
      />
      <input
        type="text"
        placeholder="Enter Second name"
        onChange={(e) => setSecondName(e.target.value.toLowerCase())}
        value={secondName}
        data-testid="input2"
        name="name2"
      />
      <button onClick={handleCalculateBtn} data-testid="calculate_relationship">
        Calculate Relationship Future
      </button>
      <button onClick={hadleClearBtn} data-testid="clear">
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default App;
