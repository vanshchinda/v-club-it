import React, { createContext } from "react";

// * Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseconfig";

// ! Temp
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const app = initializeApp(firebaseConfig);

// ! Temp
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app);
var provider = new GoogleAuthProvider();

// signInWithPopup(auth, provider);
const login = () => {
  signInWithPopup(auth, provider);
};

export const FirebaseContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={login}>
      {children}
    </FirebaseContext.Provider>
  );
};
