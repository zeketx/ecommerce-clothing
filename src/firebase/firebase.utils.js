// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
// auth = db
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyA2HFCfvmKszuPXtThidIzxiG-e6FfdNkI",
    authDomain: "clothing-db-953dd.firebaseapp.com",
    projectId: "clothing-db-953dd",
    storageBucket: "clothing-db-953dd.appspot.com",
    messagingSenderId: "871367217909",
    appId: "1:871367217909:web:5fae6a22047b176e74abbc"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// give us access to auth provider class
const provider = new firebase.auth.GoogleAuthProvider();
// alwasy triggers prompot when selected
provider.setCustomParameters({
    prompt: 'select_account'
});
// takes in provider (twitter, fb ...)
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// in case we want the whole library 
export default firebase;