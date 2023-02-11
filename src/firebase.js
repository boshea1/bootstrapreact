// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANzHcF8AnTbXjAPWTP4HeMW1bTneU90H0",
  authDomain: "bootstrapreactauth.firebaseapp.com",
  projectId: "bootstrapreactauth",
  storageBucket: "bootstrapreactauth.appspot.com",
  messagingSenderId: "955356130595",
  appId: "1:955356130595:web:89998ef70c21756d8e7096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;