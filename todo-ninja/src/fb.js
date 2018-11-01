import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDyx6ZJUPA-xs_BJMkY55mb1RDvivRD0SY",
  authDomain: "nn-veutify-files.firebaseapp.com",
  databaseURL: "https://nn-veutify-files.firebaseio.com",
  projectId: "nn-veutify-files",
  storageBucket: "nn-veutify-files.appspot.com",
  messagingSenderId: "494018042073"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;