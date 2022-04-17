import React, { useContext } from "react";
// import { connect } from "react-redux";

// * components
import { Nav } from "component/Nav";
import { Background } from "component/Background";
import { CardMain } from "component/CardMain";
import { ButtonA } from "component/ButtonA";

// * contexts
import { FirebaseContext } from "features/firebase/firebase.context";

// * MUI
import { Box, Grid, Container, Stack, Typography } from "@mui/material";

import illus1 from "resources/images/illus1.png";

export const Auth = () => {
  const { login } = useContext(FirebaseContext);

  return (
    <Container maxWidth="lg">
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"flex-end"}
        spacing={4}
        sx={{
          height: "15vh",
          padding: "50px 10px",
        }}
      >
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
          spacing={4}
        >
          <ButtonA action={login}>Sign Up</ButtonA>
          <ButtonA action={login}>Sign In</ButtonA>
        </Stack>
      </Stack>

      <Stack
        spacing={2}
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems={"center"}
      >
        <Stack direction={"column"} width={{ xs: "100%", md: "50%" }}>
          <Typography variant="h1" sx={{ fontWeight: 700 }}>
            V-club-IT
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#6A737E",
              fontWeight: "400",
              fontSize: "1.4rem",
              lineHeight: "2rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget in
            enim dui ut sit ut a. Vitae amet vel nisl, aenean. Viverra
            condimentum nibh id etiam. In cursus ultricies tincidunt eget nec
            scelerisque non. Nibh ut nec enim accumsan in. Mattis purus sed
            egestas nisl. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Eget in enim dui ut sit ut a. Vitae amet vel nisl, aenean.
            Viverra condimentum nibh id etiam. In cursus ultricies tincidunt
            eget nec scelerisque non.
          </Typography>
        </Stack>

        <Box width={{ xs: "400px", sm: "400px", lg: "600px" }}>
          <img src={illus1} alt="Illustration" />
        </Box>
      </Stack>

      <Background />
    </Container>
  );
};
