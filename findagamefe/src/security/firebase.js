import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKyCj6LYiQNbEcpVjLfiAJ0AzD_uMuXT8",
  authDomain: "findgame-359508.firebaseapp.com",
  projectId: "findgame-359508",
  storageBucket: "findgame-359508.appspot.com",
  messagingSenderId: "193288965419",
  appId: "1:193288965419:web:014cac6ea4e0e16f86496e",
  measurementId: "G-WSPYSBXH0E",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
