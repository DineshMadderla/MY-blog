// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bloghere-53a3d.firebaseapp.com",
  projectId: "bloghere-53a3d",
  storageBucket: "bloghere-53a3d.appspot.com",
  messagingSenderId: "818992461130",
  appId: "1:818992461130:web:e9a3787589820063df3db3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);