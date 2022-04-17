import React, { useContext } from "react";

import { Box, Avatar, Stack, Typography } from "@mui/material";

import { UserContext } from "context";

export const UserInfo = () => {
  const { userInfo } = useContext(UserContext);

  return (
    <Box>
      <Stack direction={"row"} alignItems="center">
        <Stack direction="column" alignItems={"flex-end"}>
          <Typography>{userInfo.displayName}</Typography>
          <Typography>20BCE2721</Typography>
        </Stack>

        <Avatar
          src={userInfo.photoURL}
          sx={{ width: 58, height: 58, marginLeft: "10px" }}
        />
      </Stack>
    </Box>
  );
};
