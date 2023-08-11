// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5eoOQHdogp1SIsDwLUwrIDv8SIDRs_dE",
  authDomain: "virtual-fitness-coach-2103.firebaseapp.com",
  projectId: "virtual-fitness-coach-2103",
  storageBucket: "virtual-fitness-coach-2103.appspot.com",
  messagingSenderId: "1004576734566",
  appId: "1:1004576734566:web:902bd04e5c0d01dff61ca7"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db, app }