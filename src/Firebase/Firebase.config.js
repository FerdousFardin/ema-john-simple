// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF4yTP0xVBjeUUgw2yw-bCcQjk5e5Y4E4",
  authDomain: "ema-john-simple-firebase-397a9.firebaseapp.com",
  projectId: "ema-john-simple-firebase-397a9",
  storageBucket: "ema-john-simple-firebase-397a9.appspot.com",
  messagingSenderId: "945002172665",
  appId: "1:945002172665:web:b73da2117b367fedf3d228",
  measurementId: "G-VYPCEB8ZFK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
