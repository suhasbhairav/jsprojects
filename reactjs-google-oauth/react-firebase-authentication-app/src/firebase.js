
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "DOMAIN",
  projectId: "ID",
  storageBucket: "Bucket",
  messagingSenderId: "SenderID",
  appId: "APPID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;