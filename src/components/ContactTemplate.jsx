import { FireStoreContext } from "../main";
import { collection, getDocs } from "firebase/firestore";
import ContactGrid from "./ContactGrid";
import { useContext, useEffect, useState } from "react";
import { refreshContactContext } from "../App";

export default function ContactTemplate() {
  const db = useContext(FireStoreContext);
  const [contacts, setContact] = useState([]);
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
  }, [db, refresh]);

  return <ContactGrid data={contacts} />;
}
