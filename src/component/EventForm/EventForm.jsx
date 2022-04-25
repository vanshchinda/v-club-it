import React, { useState, useRef } from "react";

// * MUI
import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
} from "@mui/material";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

export const EventForm = () => {
  const [eventDate, seteventDate] = useState(null);
  const formRef = useRef(null);

  const submitForm = () => {
    console.log(formRef.current);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItem: "center",
        height: "80vh",
      }}
    >
      <FormControl
        fullWidth={true}
        sx={{
          display: "flex",
          padding: "3rem",
          justifyContent: "space-evenly",
        }}
        ref={formRef}
      >
        <TextField
          label="Event Name"
          variant="outlined"
          id="event-name"
          aria-color="white"
        />
        <TextField label="Club Name" variant="outlined" id="club-name" />
        <TextField label="Description" variant="outlined" id="description" />
        <TextField label="Location" variant="outlined" id="location" />
        <TextField label="Date" variant="outlined" id="date" />
        <TextField label="Time" variant="outlined" id="time" />

        <Button variant="contained" onClick={submitForm}>
          Submit
        </Button>

        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Event Date"
            value={eventDate}
            onChange={(newDate) => {
              seteventDate(newDate);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider> */}
      </FormControl>
    </Container>
  );
};
