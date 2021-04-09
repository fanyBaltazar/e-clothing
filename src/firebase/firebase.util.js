  
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-pmSHh4kaUZcWggJI0r8qH6sVmjl0Sjw",
    authDomain: "clothingdb-51c5e.firebaseapp.com",
    projectId: "clothingdb-51c5e",
    storageBucket: "clothingdb-51c5e.appspot.com",
    messagingSenderId: "49937170085",
    appId: "1:49937170085:web:f36c9f3eade0ab5c75174c"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //google authentication utility

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
