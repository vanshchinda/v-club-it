import React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
  Dialog,
} from "@mui/material";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import tempcardImage from "resources/temp/tempcardImage.png";

export const CardDialogBox = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      ></Dialog>
    </>
  );
};

export const CardMain = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: "#1D272F",
          color: "#FFFFFF",
          borderRadius: "10%",
          cursor: "pointer",
        }}
        onClick={handleClickOpen}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          src={tempcardImage}
        />
        <CardContent>
          <Typography variant="h5">{props.title}</Typography>
          <Typography variant="h6">{props.clubName}</Typography>
          <Typography color="#6A737E" variant="body1">
            {props.description}
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ width: "100%" }}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <CalendarTodayIcon />
              <Typography variant={"subtitle2"}>{props.date}</Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <LocationOnOutlinedIcon />
              <Typography variant={"subtitle2"}>{props.location}</Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <AccessTimeOutlinedIcon />
              <Typography variant={"subtitle2"}>{props.time}</Typography>
            </Stack>
          </Stack>
        </CardContent>

        <CardActions>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            sx={{ width: "100%" }}
          >
            <Button
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: "#2A353D",
                "&:hover": {
                  backgroundColor: "#313a41",
                },
                borderRadius: "50px",
              }}
            >
              Register
            </Button>
            <InstagramIcon />
            <FacebookOutlinedIcon />
            <LinkedInIcon />
          </Stack>
        </CardActions>
      </Card>

      <CardDialogBox open={open} setOpen={setOpen} />
    </>
  );
};
