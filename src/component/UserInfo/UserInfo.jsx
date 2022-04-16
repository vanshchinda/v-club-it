import React from "react";

import { Box, Avatar, Stack, Typography } from "@mui/material";

export const UserInfo = () => {
  return (
    <Box>
      <Stack direction={"row"} alignItems="center">
        <Stack direction="column" alignItems={"flex-end"}>
          <Typography>Sai Krishna Sai K.S</Typography>
          <Typography>20BCE2721</Typography>
        </Stack>

        <Avatar sx={{ width: 58, height: 58, marginLeft: "10px" }} />
      </Stack>
    </Box>
  );
};
