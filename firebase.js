// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDApA4Q8rcFgeqnR6O-47UXI-GKjvrpfYE",
  authDomain: "sambnb-33a2c.firebaseapp.com",
  projectId: "sambnb-33a2c",
  storageBucket: "sambnb-33a2c.appspot.com",
  messagingSenderId: "206457186854",
  appId: "1:206457186854:web:8f7e2bed4ec6e6219614e7",
  measurementId: "G-3WR9JGEWTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
