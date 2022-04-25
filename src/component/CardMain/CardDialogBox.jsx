import React from "react";

import { Dialog } from "@mui/material";

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
