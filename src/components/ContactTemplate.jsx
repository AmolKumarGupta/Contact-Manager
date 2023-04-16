import { FireStoreContext } from "../main";
import { collection, getDocs } from "firebase/firestore";
import ContactGrid from "./ContactGrid";
import { createContext, useContext, useEffect, useState } from "react";
import { refreshContactContext } from "../App";
import { useMemo } from "react";
import ContactDetail from "./ContactDetail";

export const showDetailsContext = createContext();

export default function ContactTemplate() {
  const db = useContext(FireStoreContext);
  const [contacts, setContact] = useState([]);
  const [showDetails, setShowDetails] = useState(null);
  const [refresh, setRefresh] = useContext(refreshContactContext);

  useEffect(() => {
    (async function () {
      const querySnapshot = await getDocs(collection(db, "contacts"));
      let data = [];
      querySnapshot.forEach((it) => {
        data.push({ _id: it.id, ...it.data() });
      });
      setContact(data);
    })();

    return () => {
      setContact([]);
    };
  }, [db, refresh]);

  const detailComponent = useMemo(() => {
    if (showDetails == null) {
      return null;
    }
    return <ContactDetail id={showDetails} />;
  }, [showDetails]);

  return (
    <showDetailsContext.Provider value={setShowDetails}>
      {detailComponent ? detailComponent : <ContactGrid data={contacts} />}
    </showDetailsContext.Provider>
  );
}
