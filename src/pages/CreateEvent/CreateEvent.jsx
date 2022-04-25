import React from "react";

// * components
import { Nav } from "component/Nav";
import { Background } from "component/Background";
import { EventForm } from "component/EventForm";

// * MUI
import { Container } from "@mui/material";

export const CreateEvent = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Nav />
        <Background />
      </Container>
      <EventForm />
    </>
  );
};
