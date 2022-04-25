import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Stack, Typography, IconButton, SvgIcon } from "@mui/material";

import { UserInfo } from "component/UserInfo";

import { HomeButton } from "resources/icon/HomeButton.jsx";
import { ThumbsUp } from "resources/icon/ThumbsUp.jsx";
import { CalendarBlank } from "resources/icon/CalendarBlank.jsx";
import { Gear } from "resources/icon/Gear.jsx";
import { SignOut } from "resources/icon/SignOut.jsx";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import { NavContext } from "context";
import { getAuth, signOut } from "firebase/auth";
import { FirebaseContext } from "features/firebase/firebase.context";

const NavButton = ({ pageKey, ButtonComp, type, action, linkTo }) => {
  const { activePage, setactivePage } = useContext(NavContext);

  const [buttonOpen, setbuttonOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setbuttonOpen(activePage === pageKey ? true : false);
    }, 100);
  }, [activePage, pageKey]);

  return (
    <Link to={linkTo}>
      <Stack
        direction="row"
        alignItems={"center"}
        onClick={() => {
          setactivePage(pageKey);
          action();
        }}
        sx={{
          backgroundColor: buttonOpen ? "#F1F9FA" : "none",
          color: "black",
          borderRadius: "51px",
          padding: "0 10px",
          margin: "0 2px",
          cursor: "pointer",
        }}
      >
        <IconButton onClick={() => setbuttonOpen(!buttonOpen)}>
          <SvgIcon>
            <ButtonComp svgColor={buttonOpen ? "black" : "#F1F9FA"} />
          </SvgIcon>
        </IconButton>
        {buttonOpen && (
          <Typography sx={{ fontWeight: "600" }}>{type}</Typography>
        )}
      </Stack>
    </Link>
  );
};

export const Nav = () => {
  const auth = getAuth();

  const { setuserInfo } = useContext(FirebaseContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setuserInfo({});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Box
      sx={{
        height: "15vh",
        padding: "50px 10px",
      }}
    >
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"flex-end"}
        spacing={4}
      >
        <Link to={"/Create"}>
          <AddRoundedIcon color="white" />
        </Link>
        <Stack direction={"row"} alignItems="center">
          <NavButton
            pageKey={0}
            ButtonComp={HomeButton}
            type={"Home"}
            action={() => {}}
            linkTo={"/"}
          />
          <NavButton
            pageKey={1}
            ButtonComp={ThumbsUp}
            type={"Recommended"}
            action={() => {}}
            linkTo={"/Recommended"}
          />
          <NavButton
            pageKey={2}
            ButtonComp={CalendarBlank}
            type={"Registered"}
            action={() => {}}
            linkTo={"/Registered"}
          />
          <NavButton
            pageKey={3}
            ButtonComp={Gear}
            type={"Settings"}
            action={() => {}}
            linkTo={"/Settings"}
          />
          <NavButton
            pageKey={4}
            ButtonComp={SignOut}
            type={"Logout"}
            action={handleSignOut}
            linkTo={"/"}
          />
        </Stack>
        <UserInfo />
      </Stack>
    </Box>
  );
};
