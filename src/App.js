import React, { useContext } from "react";

// * components
import { Home } from "pages/Home/Home";
import { Recommended } from "pages/Recommended";
import { Registered } from "pages/Registered";
import { Settings } from "pages/Settings";
import { Auth } from "pages/Auth";
import { CreateEvent } from "pages/CreateEvent";

// * contexts
import { UserContext } from "context";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// * react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { user } = useContext(UserContext);
  // let loggedIn = user.displayName ? true : false;
  let loggedIn = true;

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#08141B",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {loggedIn ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recommended" element={<Recommended />} />
              <Route path="/registered" element={<Registered />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/create" element={<CreateEvent />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Auth />} />
            </Routes>
          )}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
