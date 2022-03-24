import { Button } from "./components/Button";
import React, { useState } from "react";
import { Row, Container } from "react-grid";
export const ButtonSection = ({ setInput, input }) => {
  const [previousValue, setPreviousValue] = useState("0");
  const [operator, setOperator] = useState("");

  const handleClick = (e) => {
    if (input === 0) {
      setInput(e.target.value);
    } else {
      setInput((prevValue) => prevValue + e.target.value);
    }
  };
  const handleCalculateLogic = (e) => {
    if (operator === "+") {
      setInput(parseInt(input) + parseInt(previousValue));
    }
  };
  const handleOperatorClick = (e) => {
    setPreviousValue(input);
    setInput(0);
    setOperator(e.target.value);
  };

  return (
    <>
      <Container css={{ marginTop: 70 }}>
        <Row>
          <Button name="1" onClick={handleClick} />
          <Button name="2" onClick={handleClick} />
          <Button name="3" onClick={handleClick} />
          <Button name="+" onClick={handleOperatorClick} />
        </Row>
        <Row>
          <Button name="4" onClick={handleClick} />
          <Button name="5" onClick={handleClick} />
          <Button name="6" onClick={handleClick} />
          <Button name="-" onClick={handleOperatorClick} />
        </Row>
        <Row>
          <Button name="7" onClick={handleClick} />
          <Button name="8" onClick={handleClick} />
          <Button name="9" onClick={handleClick} />
          <Button name="*" onClick={handleOperatorClick} />
        </Row>
        <Row>
          <Button name="C" onClick={handleClick} />
          <Button name="0" onClick={handleClick} />
          <Button name="=" onClick={handleCalculateLogic} />
          <Button name="/" onClick={handleOperatorClick} />
        </Row>
      </Container>
    </>
  );
};
