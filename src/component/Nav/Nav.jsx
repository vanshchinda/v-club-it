import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Stack, Typography, IconButton, SvgIcon } from "@mui/material";

import { UserInfo } from "component/UserInfo";

import { HomeButton } from "resources/icon/HomeButton.jsx";
import { ThumbsUp } from "resources/icon/ThumbsUp.jsx";
import { CalendarBlank } from "resources/icon/CalendarBlank.jsx";
import { Gear } from "resources/icon/Gear.jsx";
import { SignOut } from "resources/icon/SignOut.jsx";

import { NavContext } from "context";

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
  return (
    <Box
      sx={{
        height: "300px",
        padding: "50px 10px",
      }}
    >
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"flex-end"}
        spacing={4}
      >
        <Stack direction={"row"} alignItems="center">
          <NavButton
            pageKey={0}
            ButtonComp={HomeButton}
            type={"Home"}
            action={() => console.log("CLicked")}
            linkTo={"/"}
          />
          <NavButton
            pageKey={1}
            ButtonComp={ThumbsUp}
            type={"Recommended"}
            action={() => console.log("CLicked")}
            linkTo={"/Recommended"}
          />
          <NavButton
            pageKey={2}
            ButtonComp={CalendarBlank}
            type={"Registered"}
            action={() => console.log("CLicked")}
            linkTo={"/Registered"}
          />
          <NavButton
            pageKey={3}
            ButtonComp={Gear}
            type={"Settings"}
            action={() => console.log("CLicked")}
            linkTo={"/Settings"}
          />
          <NavButton
            pageKey={4}
            ButtonComp={SignOut}
            type={"Logout"}
            action={() => console.log("Logout")}
            linkTo={"/"}
          />
        </Stack>
        <UserInfo />
      </Stack>
    </Box>
  );
};
