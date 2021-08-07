import React, { useState, useEffect } from "react";
import "./App.css";

const useFetch = () => {
  console.log("the hook happens");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState();

  useEffect(() => {
    console.log("the fetch call");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setState(json);
        setIsLoading(false);
      })
      .catch((err) => setIsError(true));
  }, []);
  return [isLoading, state, isError];
};

const Form = () => {
  console.log("start me up");
  const [isLoading, data, isError] = useFetch();

  return !isLoading && !isError ? <div>{data?.title}</div> : <div>Whoops</div>;
};

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
