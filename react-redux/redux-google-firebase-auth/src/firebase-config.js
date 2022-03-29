import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import * as firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//const googleProvider = new firebase.getApp(firebaseapp).GoogleAuthProvider();
//const facebookProvider = new firebase.getApp(firebaseapp).FacebookAuthProvider();

//export {auth};