import firebase from 'firebase/compat/app'; import 'firebase/compat/auth'; import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { getDatabase, ref, set } from "firebase/database";
// import { getFirestore } from 'redux-firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBYa7zFClKnqRG-cjvDp2eD5FzNrr6Caec",
  authDomain: "blog-ac849.firebaseapp.com",
  projectId: "blog-ac849",
  storageBucket: "blog-ac849.appspot.com",
  messagingSenderId: "819074011381",
  appId: "1:819074011381:web:7de2699eb16be91e5d75bc",
  measurementId: "G-NBTJKVVG0G"
};

firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth =getAuth
// console.log(data);
// firebase.firestore().setting({timestampsInSnapshots : true});

export default firebase;