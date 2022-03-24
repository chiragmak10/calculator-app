import { css, jsx } from "@emotion/react";
import { Button } from "./components/Button";
import { Row, Col, Container } from "react-grid";
import { ButtonSection } from "./ButtonSection";
import { Label } from "./components/Label";
import React, { useState } from "react";
export const App = () => {
  const [input, setInput] = useState(0);
  return (
    <div
      css={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        css={{
          border: "2px solid",
          padding: "30px 40px 170px ",
          height: "160px",
        }}
      >
        <Container css={{ border: "2px solid", height: 50 }}>
          <Label text={input} />
        </Container>
        <ButtonSection setInput={setInput} input={input} />
      </div>
    </div>
  );
};
