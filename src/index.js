import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { FirebaseContextProvider } from "features/firebase/firebase.context";
import { NavContextProvider, UserContextProvider } from "context";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContextProvider>
      <UserContextProvider>
        <NavContextProvider>
          <App />
        </NavContextProvider>
      </UserContextProvider>
    </FirebaseContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
