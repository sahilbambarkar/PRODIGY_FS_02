// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import the database service

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVRZOdK-zJrvCVv6kaqgYY8r7oMWe-eOk",
    authDomain: "ai-trip-planner-40b66.firebaseapp.com",
    projectId: "ai-trip-planner-40b66",
    storageBucket: "ai-trip-planner-40b66.appspot.com",
    messagingSenderId: "458700712552",
    appId: "1:458700712552:web:29b799cd519c96dfa369dd",
    measurementId: "G-VBC5QTQQ90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const fireDb = getDatabase(app);

export default fireDb; // Export the database reference