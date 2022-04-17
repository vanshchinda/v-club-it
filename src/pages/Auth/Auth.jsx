import React, { useContext } from "react";
// import { connect } from "react-redux";

// * components
import { Nav } from "component/Nav";
import { Background } from "component/Background";
import { CardMain } from "component/CardMain";

// * contexts
import { FirebaseContext } from "features/firebase/firebase.context";

// * MUI
import { Container } from "@mui/material";

export const Auth = () => {
  const login = useContext(FirebaseContext);

  return (
    <Container maxWidth="lg">
      <button onClick={() => login()}>Login</button>

      <Background />
    </Container>
  );
};
