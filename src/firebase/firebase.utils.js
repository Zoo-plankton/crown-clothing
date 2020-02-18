import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCe-BDUI7XSbRzL-7zgb3fN7Hrnhy54M4Y",
    authDomain: "crown-db-4363f.firebaseapp.com",
    databaseURL: "https://crown-db-4363f.firebaseio.com",
    projectId: "crown-db-4363f",
    storageBucket: "crown-db-4363f.appspot.com",
    messagingSenderId: "794086263897",
    appId: "1:794086263897:web:ab92e944a8aa663220f548",
    measurementId: "G-3SKWBJHFGP"
  };

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;