import React from "react";

// * components
import { Nav } from "component/Nav";
import { Background } from "component/Background";

// * MUI
import { Container } from "@mui/material";

export const Settings = () => {
  return (
    <Container maxWidth="lg">
      <Nav />
      <Background />
    </Container>
  );
};
