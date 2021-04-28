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
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;