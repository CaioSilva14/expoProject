import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function getDisciplinas() {
  const disciplinasCollection = collection(db, "disciplinas");
  const disciplinasSnapshot = await getDocs(disciplinasCollection);
  return disciplinasSnapshot.docs.map(doc => doc.data());
}
