import firebase from "firebase";

import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCWXGmVKh9z-d6CHtlddR7OaeRU8JWLrcI",
    authDomain: "react-native-firebase-3dfb4.firebaseapp.com",
    projectId: "react-native-firebase-3dfb4",
    storageBucket: "react-native-firebase-3dfb4.appspot.com",
    messagingSenderId: "691442769981",
    appId: "1:691442769981:web:be494fa505c05827c24a54"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default {
    firebase,
    db,
}