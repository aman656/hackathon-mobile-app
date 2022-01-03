import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPdcGuH0U5tX6GRlPu8m5-sckdKgpK1WU",
  authDomain: "final-hackathon-79f98.firebaseapp.com",
  projectId: "final-hackathon-79f98",
  storageBucket: "final-hackathon-79f98.appspot.com",
  messagingSenderId: "1049831313870",
  appId: "1:1049831313870:web:bb59a5a2a4b4c9817e1b9f",
};

export const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

export const db = getFirestore(app);

// Initialize Firebase
