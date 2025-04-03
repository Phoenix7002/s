import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoJ6gw_zuE5D-ftxQxe2vDeK6HVTWP23E",
  authDomain: "shooter-backend.firebaseapp.com",
  projectId: "shooter-backend",
  storageBucket: "shooter-backend.appspot.com",
  messagingSenderId: "664869393865",
  appId: "1:664869393865:web:8b58b6b8b5d8021f8b0418",
  measurementId: "G-K88RQ0D8S4"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, ref, set, get };