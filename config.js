import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAblm7mUITPaSapQy5_bQ0R6tjzKeb25VQ",
  authDomain: "sarif-dd30c.firebaseapp.com",
  projectId: "sarif-dd30c",
  storageBucket: "sarif-dd30c.firebasestorage.app",
  messagingSenderId: "443042604290",
  appId: "1:443042604290:web:a669a4ad68952a38b80e1b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
