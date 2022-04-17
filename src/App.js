import React, { useContext } from "react";

// * components
import { Home } from "pages/Home/Home";
import { Recommended } from "pages/Recommended";
import { Registered } from "pages/Registered";
import { Settings } from "pages/Settings";
import { Auth } from "pages/Auth";

// * contexts
import {
  FirebaseContext,
  FirebaseContextProvider,
} from "features/firebase/firebase.context";
import { NavContextProvider, UserContextProvider, UserContext } from "context";

// * react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { userInfo } = useContext(UserContext);
  let loggedIn = userInfo.displayName ? true : false;

  return (
    <>
      <BrowserRouter>
        {loggedIn ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Recommended" element={<Recommended />} />
            <Route path="/Registered" element={<Registered />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Auth />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
