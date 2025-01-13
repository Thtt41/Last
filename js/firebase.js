import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhTei1Q9zvwrW4E3sIGzjWHHe5ecMTT6o",
    authDomain: "aria-na.firebaseapp.com",
    databaseURL: "https://aria-na-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "aria-na",
    storageBucket: "aria-na.firebasestorage.app",
    messagingSenderId: "393259036542",
    appId: "1:393259036542:web:79996aff8ecf0064290d2f",
    measurementId: "G-H2JH04K0YH"
  };  

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export services and methods
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);

export {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
};
