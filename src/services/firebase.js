import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

let firebaseConfig = {

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;