// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOHwMf1h0YyHWw1B8xLdhJipwj1Wbx61s",
    authDomain: "proyecto-coder-21563.firebaseapp.com",
    projectId: "proyecto-coder-21563",
    storageBucket: "proyecto-coder-21563.appspot.com",
    messagingSenderId: "777399425948",
    appId: "1:777399425948:web:35e6c4e9e7af73361c4659"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)