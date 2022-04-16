import React from "react";

import { Box } from "@mui/material";

export const Background = () => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(90deg, #08141B 21px, transparent 1%) center, linear-gradient(#08141B 21px, transparent 1%) center, #333f46",
          backgroundSize: "23px 23px",
          minHeight: "100vh",
          minWidth: "100vw",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-90",
        }}
      />

      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#08141B",
          minHeight: "100vh",
          minWidth: "100vw",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-100",
        }}
      />
    </>
  );
};
