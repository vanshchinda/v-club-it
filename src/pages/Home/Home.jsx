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

export const Home = () => {
  const login = useContext(FirebaseContext);

  return (
    <Container maxWidth="lg">
      <Nav />
      <CardMain
        title={"Get Started With UI/UX"}
        clubName={"Daily Design Club"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, consectetur orci gravida feugiat sed senectus quam enim..."
        }
        date={"21/03/22"}
        location={"SJT 828"}
        time={"13 : 30"}
      />
      <Background />
    </Container>
  );
};

// const mapStateToProps = (state) => ({state});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
