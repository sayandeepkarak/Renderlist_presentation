import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const {
  REACT_APP_FIREBASE_API,
  REACT_APP_FIREBASE_AUTHDOMAIN,
  REACT_APP_FIREBASE_DATABASEURL,
  REACT_APP_FIREBASE_PROJECTID,
  REACT_APP_FIREBASE_STORAGEBUCKET,
  REACT_APP_FIREBASE_MSGSENDERID,
  REACT_APP_FIREBASE_APPID,
} = process.env;

const app = initializeApp({
  apiKey: REACT_APP_FIREBASE_API,
  authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASEURL,
  projectId: REACT_APP_FIREBASE_PROJECTID,
  storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MSGSENDERID,
  appId: REACT_APP_FIREBASE_APPID,
});

export const db = getFirestore(app);

export const auth = getAuth(app);
