import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjXugS0DUv81Wr_qXNdOucxG4or7Mx-Nc",
  authDomain: "pagina-b49ec.firebaseapp.com",
  projectId: "pagina-b49ec",
  storageBucket: "pagina-b49ec.firebasestorage.app",
  messagingSenderId: "977529048244",
  appId: "1:977529048244:web:6b8f71286fc5ea69729be1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default app;
export {db, getAuth};