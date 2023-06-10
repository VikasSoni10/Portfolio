import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA3V7qHviSsXgqda7nsMB3fR0kvl8K-I6U",
  authDomain: "react-portfolio-vikas.firebaseapp.com",
  projectId: "react-portfolio-vikas",
  storageBucket: "react-portfolio-vikas.appspot.com",
  messagingSenderId: "968630695916",
  appId: "1:968630695916:web:275bb0b5f1f42af72bf2c9"
};

export const app = initializeApp(firebaseConfig);
export const db= getFirestore();