import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyDdQ9um5YIbFgDOCgkw1_SzGqRh9LsWH5I",
  authDomain: "renderlist-4c2c4.firebaseapp.com",
  databaseURL: "https://renderlist-4c2c4-default-rtdb.firebaseio.com",
  projectId: "renderlist-4c2c4",
  storageBucket: "renderlist-4c2c4.appspot.com",
  messagingSenderId: "1017956556577",
  appId: "1:1017956556577:web:94b3d09d86a97ebf67e860",
});

export const db = getFirestore(app);

export const auth = getAuth(app);
