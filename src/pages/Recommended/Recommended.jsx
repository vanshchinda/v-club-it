import React from "react";
// import { connect } from "react-redux";

// * components
import { Nav } from "component/Nav";
import { Background } from "component/Background";
import { CardMain } from "component/CardMain";

// * contexts
// import { FirebaseContext } from "features/firebase/firebase.context";

// * MUI
import { Container } from "@mui/material";

export const Recommended = () => {
  // const login = useContext(FirebaseContext);

  return (
    <Container maxWidth="lg">
      <Nav />
      <CardMain />
      <Background />
    </Container>
  );
};

// const mapStateToProps = (state) => ({state});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
