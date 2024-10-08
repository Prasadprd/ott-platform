import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const {
  VITE_REACT_APP_FIREBASE_API_KEY,
  VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  VITE_REACT_APP_FIREBASE_PROJECT_ID,
  VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  VITE_REACT_APP_FIREBASE_APP_ID,
  VITE_REACT_APP_FIREBASE_MEASUREMEMT_ID,
} = import.meta.env;

// Firebase Configuration Object
const firebaseConfig = {
  apiKey: VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_REACT_APP_FIREBASE_APP_ID,
  measurementId: VITE_REACT_APP_FIREBASE_MEASUREMEMT_ID,
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// Firebase web app init
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Sign in With Google Setup with popup
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
