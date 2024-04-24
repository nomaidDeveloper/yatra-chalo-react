// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjYZS_yzaYjAFnWkYW5D-3JTtZ8oRYxl8",
  authDomain: "yatra-chalo.firebaseapp.com",
  projectId: "yatra-chalo",
  storageBucket: "yatra-chalo.appspot.com",
  messagingSenderId: "323581395269",
  appId: "1:323581395269:web:7bd574586bd50672463e2c",
  measurementId: "G-GW3G4S601Y"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);

export default firebaseapp;
