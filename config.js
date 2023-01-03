import firebase from 'firebase';
require('@firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCYi22QfHXTuaIA_Ncr4lBwDqftURMNWc8",
    authDomain: "ewaste-b6fed.firebaseapp.com",
    projectId: "ewaste-b6fed",
    storageBucket: "ewaste-b6fed.appspot.com",
    messagingSenderId: "709522931995",
    appId: "1:709522931995:web:d7d7b09f2d70d8261853be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();