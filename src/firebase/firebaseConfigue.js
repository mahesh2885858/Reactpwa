// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJQLhOTAJnJCda_22IprGGMR2hq9nS6yE",
  authDomain: "pwa-practice-71964.firebaseapp.com",
  databaseURL: "https://pwa-practice-71964-default-rtdb.firebaseio.com",
  projectId: "pwa-practice-71964",
  storageBucket: "pwa-practice-71964.appspot.com",
  messagingSenderId: "184243389805",
  appId: "1:184243389805:web:17e28d96966dfb166b0664",
  measurementId: "G-LFZTYTRSCW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireBaseApp = getFirestore(app);
