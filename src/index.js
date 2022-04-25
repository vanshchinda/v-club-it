import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// * contexts
import {
  FirebaseContextProvider,
  FirestoreContextProvider,
} from "features/firebase";
import {
  NavContextProvider,
  UserContextProvider,
  EventsContextProvider,
} from "context";

const container = document.getElementById("root");

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(
  <React.StrictMode>
    <FirebaseContextProvider>
      <FirestoreContextProvider>
        <UserContextProvider>
          <EventsContextProvider>
            <NavContextProvider>
              <App />
            </NavContextProvider>
          </EventsContextProvider>
        </UserContextProvider>
      </FirestoreContextProvider>
    </FirebaseContextProvider>
  </React.StrictMode>
);
