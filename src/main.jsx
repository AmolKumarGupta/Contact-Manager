import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import db from "./firestore/init";

export const FireStoreContext = createContext(db);

ReactDOM.createRoot(document.getElementById("root")).render(
  <FireStoreContext.Provider value={db}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FireStoreContext.Provider>
);
