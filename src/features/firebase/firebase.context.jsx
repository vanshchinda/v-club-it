import React, { createContext, useState, useEffect } from "react";

// * Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseconfig";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
var provider = new GoogleAuthProvider();

const db = getFirestore(app);

export const FirebaseContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
  const [user, setuser] = useState({});

  const signin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        setuser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const login = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return signin();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <FirebaseContext.Provider
      value={{
        login: login,
        user: user,
        setuser: setuser,
        db: db,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
