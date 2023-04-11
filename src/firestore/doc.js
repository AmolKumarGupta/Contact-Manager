import { collection, doc, setDoc } from "firebase/firestore";
import db from "./init";

export async function createDoc(data) {
  const contactRef = doc(collection(db, "contacts"));
  return await setDoc(contactRef, data);
}
