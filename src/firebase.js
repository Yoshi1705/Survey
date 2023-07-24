// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'// for firestore database
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC7YvzY2QXfz18Qx3wRUdu9_OckcZBVQ64",
  authDomain: "surveyapp-8d225.firebaseapp.com",
  projectId: "surveyapp-8d225",
  storageBucket: "surveyapp-8d225.appspot.com",
  messagingSenderId: "898800627749",
  appId: "1:898800627749:web:6bcc553d71b8ddf9878fcc",
  measurementId: "G-EXSCY8K5WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);