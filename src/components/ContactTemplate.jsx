import { FireStoreContext } from "../main";
import { collection, getDocs } from "firebase/firestore";
import ContactGrid from "./ContactGrid";
import { useContext, useEffect, useState } from "react";

export default function ContactTemplate() {
  const db = useContext(FireStoreContext);
  const [contacts, setContact] = useState([]);

  useEffect(() => {
    (async function () {
      const querySnapshot = await getDocs(collection(db, "contacts"));
      let data = [];
      querySnapshot.forEach((it) => {
        data.push({ _id: it.id, ...it.data() });
      });
      setContact(data);
    })();
  }, [db]);

  return <ContactGrid data={contacts} />;
}
