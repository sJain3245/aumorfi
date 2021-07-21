import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBqjFy1qhkHDaZlmCLAyD4pNrjP2Y4fFrU",
  authDomain: "aumorfi.firebaseapp.com",
  projectId: "aumorfi",
  storageBucket: "aumorfi.appspot.com",
  messagingSenderId: "137820474810",
  appId: "1:137820474810:web:3f309793ff58ad3f6da183",
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
