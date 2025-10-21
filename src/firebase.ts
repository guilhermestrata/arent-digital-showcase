import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqqSxXBm15mniU4p57W9shfDEOyvVXo5Q",
  authDomain: "arentech-b33bc.firebaseapp.com",
  projectId: "arentech-b33bc",
  storageBucket: "arentech-b33bc.firebasestorage.app",
  messagingSenderId: "879172146359",
  appId: "1:879172146359:web:e4b4d0b0bda15dbc3da932",
  measurementId: "G-J98WH70E3S"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
