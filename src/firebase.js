import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQ4BX2Jz2PyI1yJEBiUqTEpRanVJJACFg",
    authDomain: "react-chatbox-83c9e.firebaseapp.com",
    projectId: "react-chatbox-83c9e",
    storageBucket: "react-chatbox-83c9e.appspot.com",
    messagingSenderId: "802046157348",
    appId: "1:802046157348:web:8c62c5d46793b95d9b6eb1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
