"use client";
//  import { useState } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const Button1 = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
`;
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <H1> Hello World</H1>
      <Button1>Click me</Button1>
    </div>
  );
}

export default App;
