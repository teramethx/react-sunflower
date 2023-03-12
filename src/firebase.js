import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzaW3SO6nLIS1I_4cUoWLH_7KBOmQFa4I",
  authDomain: "react-sunflower.firebaseapp.com",
  projectId: "react-sunflower",
  storageBucket: "react-sunflower.appspot.com",
  messagingSenderId: "87459489872",
  appId: "1:87459489872:web:e32137b5bdc54118370955"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);