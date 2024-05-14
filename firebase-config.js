// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Z9w9U6vk4MeQlV1TLfBWXTbEJkrxjOk",
  authDomain: "end-pro-scalper-v2.firebaseapp.com",
  databaseURL: "https://end-pro-scalper-v2-default-rtdb.firebaseio.com",
  projectId: "end-pro-scalper-v2",
  storageBucket: "end-pro-scalper-v2.appspot.com",
  messagingSenderId: "804010929759",
  appId: "1:804010929759:web:29c6d009c9c1bc4ebf35ea",
  measurementId: "G-G52DDB6XBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);