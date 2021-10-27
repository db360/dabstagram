// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore, getStorage} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlsjHP5kljO0oYmpqQ1Ykev2qvlfgbHtA",
  authDomain: "dabstagram-c3611.firebaseapp.com",
  projectId: "dabstagram-c3611",
  storageBucket: "dabstagram-c3611.appspot.com",
  messagingSenderId: "76480956746",
  appId: "1:76480956746:web:af4abad6abdb1f62c9d9b3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}