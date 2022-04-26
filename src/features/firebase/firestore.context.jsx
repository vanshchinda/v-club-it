import React, { createContext, useContext, useState, useEffect } from "react";

// * Firebase
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  query,
} from "firebase/firestore";
import { FirebaseContext } from "./firebase.context";

export const FirestoreContext = createContext();

export const FirestoreContextProvider = ({ children }) => {
  const { db } = useContext(FirebaseContext);
  const eventsRef = collection(db, "events");
  const [eventsData, seteventsData] = useState(null);
  const [loading, setloading] = useState(true);

  async function getEvents() {
    const events = await getDocs(eventsRef);
    seteventsData(events.docs);
    setloading(false);
    return events;
  }

  useEffect(() => {
    try {
      getEvents();
      // setTimeout(() => {
      //   setloading(false);
      // }, 230);
    } catch (e) {
      console.log(e);
    }

    return () => {};
  }, []);

  async function addEventDoc(data) {
    const docRef = addDoc(eventsRef, data);
  }

  return (
    <FirestoreContext.Provider
      value={{
        eventsData: eventsData,
        seteventsData: seteventsData,
        addEventDoc: addEventDoc,
        loading: loading,
      }}
    >
      {children}
    </FirestoreContext.Provider>
  );
};
