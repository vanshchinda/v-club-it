import React, { useState, createContext, useContext, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { FirebaseContext } from "features/firebase/firebase.context";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { userInfo } = useContext(FirebaseContext);

  // const localData = localStorage.getItem("user");
  // const data = localData ? JSON.parse(localData) : { authorized: false };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (userFound) => {
  //     if (!userFound) {
  //       setUser({ authorized: false });
  //     }
  //   });
  // }, []);

  //   useEffect(() => {
  //     localStorage.setItem("user", JSON.stringify(user));
  //   }, [user]);

  return (
    <UserContext.Provider value={{ userInfo: userInfo }}>
      {children}
    </UserContext.Provider>
  );
};
