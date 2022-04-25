import React, { useState, createContext, useContext, useEffect } from "react";

import { FirebaseContext, FirestoreContext } from "features/firebase";

export const EventsContext = createContext();

export const EventsContextProvider = ({ children }) => {
  const { eventsData, loading } = useContext(FirestoreContext);
  // const [eventsRendered, seteventsRendered] = useState(eventsData);

  return (
    <EventsContext.Provider
      value={{ eventsData: eventsData, loading: loading }}
    >
      {children}
    </EventsContext.Provider>
  );
};
