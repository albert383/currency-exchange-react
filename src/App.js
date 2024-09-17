import React, { useState } from "react";
import Form from "./Form";
import Container from "./Container";
import "./index.css";

function App() {
  const [result, setResult] = useState("");

  return (
    <Container>
      <Form setResult={setResult} result={result} />
    </Container>
  );
}

export default App;