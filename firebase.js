import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsVrbk7CG4fXs0rLHJvlfoEsPqrcMHaiQ",
  authDomain: "chokbar-88e87.firebaseapp.com",
  projectId: "chokbar-88e87",
  storageBucket: "chokbar-88e87.appspot.com",
  messagingSenderId: "238539519869",
  appId: "1:238539519869:web:ccbd4df081d92ddd77be14",
  measurementId: "G-L0F4KYXYMS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { auth, app, db };
