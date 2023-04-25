// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-q1t8ZxBNx4ONsoYR3V73ZyqI8njYfBE",
  authDomain: "ema-john-auth-d9f26.firebaseapp.com",
  projectId: "ema-john-auth-d9f26",
  storageBucket: "ema-john-auth-d9f26.appspot.com",
  messagingSenderId: "780848393055",
  appId: "1:780848393055:web:6e8a6c69d28ff48b7b24ea",
  measurementId: "G-F0GZ1P82CF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;