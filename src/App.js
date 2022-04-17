import React from "react";

// * components
import { Home } from "pages/Home/Home";
import { Recommended } from "pages/Recommended";
import { Registered } from "pages/Registered";
import { Settings } from "pages/Settings";
import { Auth } from "pages/Auth";

// * contexts
import { FirebaseContextProvider } from "features/firebase/firebase.context";
import { NavContextProvider, UserContextProvider } from "context";

// * react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let loggedIn = true;
  return (
    <>
      <FirebaseContextProvider>
        <UserContextProvider>
          <NavContextProvider>
            <BrowserRouter>
              {loggedIn ? (
                <Routes>
                  <Route path="/" element={<Auth />} />
                </Routes>
              ) : (
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Recommended" element={<Recommended />} />
                  <Route path="/Registered" element={<Registered />} />
                  <Route path="/Settings" element={<Settings />} />
                </Routes>
              )}
            </BrowserRouter>
          </NavContextProvider>
        </UserContextProvider>
      </FirebaseContextProvider>
    </>
  );
}

export default App;
