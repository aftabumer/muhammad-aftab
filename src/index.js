import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAqhIFUs7ajSjZAm_JthuwGELTYWz5y6AI",
  authDomain: "park-idea.firebaseapp.com",
  databaseURL: "https://park-idea.firebaseio.com",
  projectId: "park-idea",
  storageBucket: "park-idea.appspot.com",
  messagingSenderId: "408417082830"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
