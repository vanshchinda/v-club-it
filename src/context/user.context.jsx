import React, { useState, createContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();
// const auth = getAuth();

export const UserContextProvider = ({ children }) => {
  //   const localData = localStorage.getItem("user");
  //   const data = localData ? JSON.parse(localData) : { authorized: false };

  const [user, setUser] = useState(null);

  //   useEffect(() => {
  // onAuthStateChanged(auth, (userFound) => {
  //   if (!userFound) {
  // setUser({ authorized: false });
  //   }
  // });
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem("user", JSON.stringify(user));
  //   }, [user]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
