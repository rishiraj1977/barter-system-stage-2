import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBPHENP0V8Kvwkf81N568hN8r2Luqnpkzo",
  authDomain: "book-santa-284e0.firebaseapp.com",
  databaseURL: "https://book-santa-284e0.firebaseio.com",
  projectId: "book-santa-284e0",
  storageBucket: "book-santa-284e0.appspot.com",
  messagingSenderId: "382987569160",
  appId: "1:382987569160:web:192082a868b4417d60e9bd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();