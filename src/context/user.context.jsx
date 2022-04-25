import React, { useState, createContext, useContext, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { FirebaseContext } from "features/firebase/firebase.context";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { user, setuser } = useContext(FirebaseContext);
  const auth = getAuth();
  const localData = localStorage.getItem("user");
  const data = localData ? JSON.parse(localData) : { authorized: false };

  // window.addEventListener("storage", (e) => {
  //   const savedData = JSON.parse(window.localStorage.getItem("user"));

  //   if (JSON.stringify(user) !== JSON.stringify(savedData)) {
  //     // localStorage.setItem("user", JSON.stringify(u));
  //     setuser({
  //       authorized: false,
  //       displayName: "",
  //       photoURL: "",
  //       email: "",
  //     });
  //   }
  // });

  // useEffect(() => {
  //   onAuthStateChanged(auth, (userFound) => {
  //     if (!userFound) {
  //       setuser({ authorized: false });
  //     }
  //   });
  // }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user: user }}>
      {children}
    </UserContext.Provider>
  );
};
