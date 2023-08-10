import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCFX7Lpk46fvlLreTZU7pRW67jJq9MWP-8",
  authDomain: "chat-app-firebase-f816c.firebaseapp.com",
  projectId: "chat-app-firebase-f816c",
  storageBucket: "chat-app-firebase-f816c.appspot.com",
  messagingSenderId: "489416865633",
  appId: "1:489416865633:web:a6cac8a0f47dc1689ef720",
  measurementId: "G-QRZ6HTNTHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)