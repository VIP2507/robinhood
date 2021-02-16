import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpORPZTGCJu6pf9yYcoBCGOxMVnayLTCM",
  authDomain: "robinhood-7a2b6.firebaseapp.com",
  projectId: "robinhood-7a2b6",
  storageBucket: "robinhood-7a2b6.appspot.com",
  messagingSenderId: "768434091658",
  appId: "1:768434091658:web:7d5ba67d60f4d3afd19f73",
  measurementId: "G-9SK3QNS60S"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };