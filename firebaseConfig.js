// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmEY4Sz5tTW6sro5qMH4DWH5lTZugJn0Q",
  authDomain: "guiacorpvs.firebaseapp.com",
  projectId: "guiacorpvs",
  storageBucket: "guiacorpvs.firebasestorage.app",
  messagingSenderId: "59370532720",
  appId: "1:59370532720:web:fbfbe87d6943775b9729b5"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
