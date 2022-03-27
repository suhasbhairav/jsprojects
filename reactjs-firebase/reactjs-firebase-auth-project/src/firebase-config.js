// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1CLFiDbT7LVDmQr6juoyt_FjcM0XOeYI",
  authDomain: "reactsignup-9f1ff.firebaseapp.com",
  projectId: "reactsignup-9f1ff",
  storageBucket: "reactsignup-9f1ff.appspot.com",
  messagingSenderId: "726277181506",
  appId: "1:726277181506:web:c6d33b7503b0e30408dddb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);