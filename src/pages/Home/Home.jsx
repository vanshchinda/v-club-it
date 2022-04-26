import React, { useContext, useEffect } from "react";
// import { connect } from "react-redux";

// * components
import { Nav } from "component/Nav";
import { Background } from "component/Background";
import { Slider } from "component/Slider";

// * contexts
import { FirebaseContext } from "features/firebase/firebase.context";
import { EventsContext } from "context";

// * MUI
import { Container, Box } from "@mui/material";

export const Home = () => {
  const login = useContext(FirebaseContext);

  const { eventsData, loading } = useContext(EventsContext);

  useEffect(() => {
    return () => {};
  }, [eventsData, loading]);

  return (
    <>
      <Container maxWidth="lg">
        <Nav />
        <Background />
      </Container>
      {!loading && <Slider cardData={eventsData} />}
    </>
  );
};

// const mapStateToProps = (state) => ({state});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
