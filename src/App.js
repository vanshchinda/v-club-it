import React, { useContext, useEffect } from "react";

// * components
import { Home } from "pages/Home/Home";
import { Recommended } from "pages/Recommended";
import { Registered } from "pages/Registered";
import { Settings } from "pages/Settings";
import { Auth } from "pages/Auth";
import { CreateEvent } from "pages/CreateEvent";

// * contexts
import { UserContext, ThemeContextProvider } from "context";

// * react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { user } = useContext(UserContext);
  let loggedIn = user.displayName ? true : false;

  useEffect(() => {
    document.cookie = {
      name: "google",
    };
    console.log(document.cookie.name);
  }, []);

  return (
    <>
      <ThemeContextProvider>
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
      </ThemeContextProvider>
    </>
  );
}

export default App;
