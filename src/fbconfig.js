// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
// import { getFirestore } from 'redux-firestore';
const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBYa7zFClKnqRG-cjvDp2eD5FzNrr6Caec",
  authDomain: "blog-ac849.firebaseapp.com",
  projectId: "blog-ac849",
  storageBucket: "blog-ac849.appspot.com",
  messagingSenderId: "819074011381",
  appId: "1:819074011381:web:7de2699eb16be91e5d75bc",
  measurementId: "G-NBTJKVVG0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);
// console.log(db);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export {storage,auth,provider}