import React from "react";

// * components
import { Home } from "pages/Home/Home";
import { Recommended } from "pages/Recommended";
import { Registered } from "pages/Registered";
import { Settings } from "pages/Settings";

// * contexts
import { FirebaseContextProvider } from "features/firebase/firebase.context";
import { NavContextProvider } from "context";

// * react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <FirebaseContextProvider>
        <NavContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Recommended" element={<Recommended />} />
              <Route path="/Registered" element={<Registered />} />
              <Route path="/Settings" element={<Settings />} />
            </Routes>
          </BrowserRouter>
        </NavContextProvider>
      </FirebaseContextProvider>
    </>
  );
}

export default App;
