// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC8Xntd20EHIus1h-0URtsn9RQIRra-qbo",
  authDomain: "e-commerce-6c5da.firebaseapp.com",
  projectId: "e-commerce-6c5da",
  storageBucket: "e-commerce-6c5da.appspot.com",
  messagingSenderId: "581006054924",
  appId: "1:581006054924:web:7c902b2fb7009536e3c029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {auth}