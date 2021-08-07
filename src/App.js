import React, { useState, useEffect } from "react";
import "./App.css";

const Form = () => {
  console.log("start me up");
  const [text, setText] = useState(window.localStorage.getItem("text") || "");
  console.log(text);
  //without a dependency list, this will get called again every time the state of the app changes
  //we don't want that because we only want this to run when the state for this component
  //changes
  useEffect(() => {
    window.localStorage.setItem("text", text);
  });

  const handleFormChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form>
      <h3>Write something</h3>
      <input type="text" value={text} onChange={handleFormChange} />
      <p>This is the output {text}</p>
    </form>
  );
};

function App() {
  const [num, setNum] = useState(0);
  const handler = () => setNum((previous) => previous + 1);
  return (
    <div className="App">
      <Form />
      <button onClick={handler}>{num}</button>
    </div>
  );
}

export default App;
