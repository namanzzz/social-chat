// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD3GwteX5kcCSWfN9UYutX652rOujJDARc",
    authDomain: "social-chat-c6c51.firebaseapp.com",
    projectId: "social-chat-c6c51",
    storageBucket: "social-chat-c6c51.appspot.com",
    messagingSenderId: "64304277622",
    appId: "1:64304277622:web:f38c0a4b5a660aac325757"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

