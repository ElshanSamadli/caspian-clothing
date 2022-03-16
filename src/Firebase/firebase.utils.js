import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCHp6_gmWQi-zw_9BH-StCTZHjckQ2744I",
  authDomain: "caspian-db.firebaseapp.com",
  projectId: "caspian-db",
  storageBucket: "caspian-db.appspot.com",
  messagingSenderId: "87042010773",
  appId: "1:87042010773:web:5c740baf70c47913fdf59c",
  measurementId: "G-0CJ2DZ543K",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;