// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpYRWWzvVLyPSxqZxnnuKKgFYMW_XkCy4",
  authDomain: "react-auth-d5023.firebaseapp.com",
  projectId: "react-auth-d5023",
  storageBucket: "react-auth-d5023.appspot.com",
  messagingSenderId: "401792150088",
  appId: "1:401792150088:web:fe90c9034cafd73369467d",
  measurementId: "G-3YEYC49JGJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
