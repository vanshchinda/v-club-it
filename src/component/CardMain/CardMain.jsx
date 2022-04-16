import React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
} from "@mui/material";

// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

import tempcardImage from "resources/temp/tempcardImage.png";

export const CardMain = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, backgroundColor: "#1D272F" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          src={tempcardImage}
        />
        <CardContent>
          <Typography variant="h5">{props.title}</Typography>
          <Typography variant="body2">{props.clubName}</Typography>
          <Typography variant="baody1">{props.description}</Typography>
          <Stack direction={"row"}>
            {/* <Box>
              <CalendarTodayIcon />
              {props.date}
            </Box> */}
          </Stack>
        </CardContent>

        <CardActions>
          <Button size="small">Register</Button>
        </CardActions>
      </Card>
    </>
  );
};
