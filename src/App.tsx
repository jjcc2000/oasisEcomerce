"use client";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />

      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Checking In and Out</Heading>
        <Button>Check In</Button>
        <Button>Check Out</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Enter a number"></Input>
      </StyledApp>
    </>
  );
}

export default App;
