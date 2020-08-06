import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyBYKWDJGzlUdJFLGVas-n1nO3XImyr2juY",
  authDomain: "godoys-barber.firebaseapp.com",
  databaseURL: "https://godoys-barber.firebaseio.com",
  projectId: "godoys-barber",
  storageBucket: "godoys-barber.appspot.com",
  messagingSenderId: "336361315713",
  appId: "1:336361315713:web:54a68a1e23f96f4b4e5c80",
  measurementId: "G-RKSY5KPXB0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;