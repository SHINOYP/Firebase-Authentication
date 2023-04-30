
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEDpHMoeECq9fMLGEdLlnu2d05f545E1Y",
  authDomain: "adam-authentication.firebaseapp.com",
  projectId: "adam-authentication",
  storageBucket: "adam-authentication.appspot.com",
  messagingSenderId: "136362665879",
  appId: "1:136362665879:web:45371c1bbe440c642206d2",
  measurementId: "G-W1MT8GVBE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
