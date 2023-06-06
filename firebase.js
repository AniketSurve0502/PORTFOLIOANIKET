
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaD_fRcOYgxySnjRfZ5fYfNQxBAiqZ6jE",
  authDomain: "aniketreact-portfolio.firebaseapp.com",
  projectId: "aniketreact-portfolio",
  storageBucket: "aniketreact-portfolio.appspot.com",
  messagingSenderId: "1000446662903",
  appId: "1:1000446662903:web:a3fd39f542252d7a6c9bf2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()