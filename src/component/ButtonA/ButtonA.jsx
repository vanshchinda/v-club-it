import React from "react";

// * MUI
import { Button, Typography } from "@mui/material";

export const ButtonA = ({ children, action }) => {
  return (
    <>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#1D272F",
          "&:hover": {
            backgroundColor: "#263038",
          },
          borderRadius: "30px",
        }}
        onClick={action}
      >
        <Typography variant="subtitle1">{children}</Typography>
      </Button>
    </>
  );
};
