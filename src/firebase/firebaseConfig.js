// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdrES-s6O7LQStMz0jl8gBz7HTQBf5Iig",
  authDomain: "muebles-de-calidad-fm.firebaseapp.com",
  projectId: "muebles-de-calidad-fm",
  storageBucket: "muebles-de-calidad-fm.appspot.com",
  messagingSenderId: "761313737169",
  appId: "1:761313737169:web:a373f4e98d0457360148f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);