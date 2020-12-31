import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA5FelLmewlUH6rjNnvmCJPxWEGsjSDHg4",
    authDomain: "tinder-clone-ebb92.firebaseapp.com",
    projectId: "tinder-clone-ebb92",
    storageBucket: "tinder-clone-ebb92.appspot.com",
    messagingSenderId: "475378586275",
    appId: "1:475378586275:web:2d816a8e3bf12dff362516"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;