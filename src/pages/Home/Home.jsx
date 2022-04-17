import React, { useContext } from "react";
// import { connect } from "react-redux";

// * components
import { Nav } from "component/Nav";
import { Background } from "component/Background";
import { Slider } from "component/Slider";

// * contexts
import { FirebaseContext } from "features/firebase/firebase.context";

// * MUI
import { Container, Box } from "@mui/material";

export const Home = () => {
  const login = useContext(FirebaseContext);

  const cardData = [
    {
      title: "Get Started With UI/UX",
      clubName: "Daily Design Club",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, consectetur orci gravida feugiat sed senectus quam enim...",
      date: "21/03/22",
      location: "SJT 828",
      time: "13:30",
    },
    {
      title: "Get Started With UI/UX",
      clubName: "Daily Design Club",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, consectetur orci gravida feugiat sed senectus quam enim...",
      date: "21/03/22",
      location: "SJT 828",
      time: "13:30",
    },
    {
      title: "Get Started With UI/UX",
      clubName: "Daily Design Club",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, consectetur orci gravida feugiat sed senectus quam enim...",
      date: "21/03/22",
      location: "SJT 828",
      time: "13:30",
    },
    {
      title: "Get Started With UI/UX",
      clubName: "Daily Design Club",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, consectetur orci gravida feugiat sed senectus quam enim...",
      date: "21/03/22",
      location: "SJT 828",
      time: "13:30",
    },
    {
      title: "Get Started With UI/UX",
      clubName: "Daily Design Club",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, consectetur orci gravida feugiat sed senectus quam enim...",
      date: "21/03/22",
      location: "SJT 828",
      time: "13:30",
    },
    {
      title: "Get Started With UI/UX",
      clubName: "Daily Design Club",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, consectetur orci gravida feugiat sed senectus quam enim...",
      date: "21/03/22",
      location: "SJT 828",
      time: "13:30",
    },
    {
      title: "Get Started With UI/UX",
      clubName: "Daily Design Club",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, consectetur orci gravida feugiat sed senectus quam enim...",
      date: "21/03/22",
      location: "SJT 828",
      time: "13:30",
    },
    {
      title: "Get Started With UI/UX",
      clubName: "Daily Design Club",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, consectetur orci gravida feugiat sed senectus quam enim...",
      date: "21/03/22",
      location: "SJT 828",
      time: "13:30",
    },
    {
      title: "Get Started With UI/UX",
      clubName: "Daily Design Club",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, consectetur orci gravida feugiat sed senectus quam enim...",
      date: "21/03/22",
      location: "SJT 828",
      time: "13:30",
    },
    {
      title: "Get Started With UI/UX",
      clubName: "Daily Design Club",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, consectetur orci gravida feugiat sed senectus quam enim...",
      date: "21/03/22",
      location: "SJT 828",
      time: "13:30",
    },
    {
      title: "Get Started With UI/UX",
      clubName: "Daily Design Club",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, consectetur orci gravida feugiat sed senectus quam enim...",
      date: "21/03/22",
      location: "SJT 828",
      time: "13:30",
    },
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Nav />
        <Background />
      </Container>
      <Slider cardData={cardData} />
    </>
  );
};

// const mapStateToProps = (state) => ({state});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
