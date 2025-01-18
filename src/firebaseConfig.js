import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

    apiKey: "AIzaSyAOBr6JOh6gVXu6pw5M9k8qgKAkSMKXaqQ",
  
    authDomain: "gate-b49ba.firebaseapp.com",
  
    projectId: "gate-b49ba",
  
    storageBucket: "gate-b49ba.appspot.com",
  
    messagingSenderId: "344391121670",
  
    appId: "1:344391121670:web:2009e7cd15f125f66e3c87",
  
    measurementId: "G-M76Z774N0E"
  
  };
  
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
