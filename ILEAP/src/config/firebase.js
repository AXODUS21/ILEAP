// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQWQGjTywY9hjM5lsvI4O9GAGa7toT37g",
  authDomain: "ileap-a49b9.firebaseapp.com",
  projectId: "ileap-a49b9",
  storageBucket: "ileap-a49b9.appspot.com",
  messagingSenderId: "484042538340",
  appId: "1:484042538340:web:4daa041c359048b7d44e71",
  measurementId: "G-4DRPRDKH31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();