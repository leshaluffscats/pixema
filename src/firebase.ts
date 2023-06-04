import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRGTt9PJWzUNxChYAUb2ErlkfM81bMGqM",
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "pixema-project.firebaseapp.com",
  projectId: "pixema-project",
  storageBucket: "pixema-project.appspot.com",
  messagingSenderId: "669809838607",
  appId: "1:669809838607:web:acea85ccf590fdb515317a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);