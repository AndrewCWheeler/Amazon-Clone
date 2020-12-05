import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkWACb0QCcTxBxLJGAkSLBlKmb52tSUyc",
  authDomain: "clone-c3595.firebaseapp.com",
  databaseURL: "https://clone-c3595.firebaseio.com",
  projectId: "clone-c3595",
  storageBucket: "clone-c3595.appspot.com",
  messagingSenderId: "1098654690470",
  appId: "1:1098654690470:web:4fe47eb3f23cdb43d45867",
  measurementId: "G-95WZS1TLP3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };