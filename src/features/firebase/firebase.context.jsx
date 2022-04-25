import React, { createContext, useState, useEffect } from "react";

// * Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseconfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
var provider = new GoogleAuthProvider();

const db = getFirestore(app);

export const FirebaseContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
  const [user, setuser] = useState({});

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setuser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
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
