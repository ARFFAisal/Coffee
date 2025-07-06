// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoOuoTlYY2gXzWAhju5atP4EVmY3tWMqg",
  authDomain: "coffe-sotre-app.firebaseapp.com",
  projectId: "coffe-sotre-app",
  storageBucket: "coffe-sotre-app.firebasestorage.app",
  messagingSenderId: "482497479982",
  appId: "1:482497479982:web:bc90298c19c1155dc0a6bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);