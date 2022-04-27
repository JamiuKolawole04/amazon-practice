// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app"; ===> modern
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjrqKab6ZbArkNkseVDfktzpKocWEcySY",
    authDomain: "clone-46971.firebaseapp.com",
    projectId: "clone-46971",
    storageBucket: "clone-46971.appspot.com",
    messagingSenderId: "580734797984",
    appId: "1:580734797984:web:1d88fe7db24eaf4e47e1c5"
};

// Initialize Firebase ===> modern
// const app = initializeApp(firebaseConfig); ===> modern

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };