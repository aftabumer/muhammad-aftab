import firebase, { auth } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAqhIFUs7ajSjZAm_JthuwGELTYWz5y6AI",
    authDomain: "park-idea.firebaseapp.com",
    databaseURL: "https://park-idea.firebaseio.com",
    projectId: "park-idea",
    storageBucket: "park-idea.appspot.com",
    messagingSenderId: "408417082830"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;