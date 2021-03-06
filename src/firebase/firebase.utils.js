import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBpck5OS8PZphuum2HpOZck2bziQ5MoTVQ",
  authDomain: "crwn-db-c8ddb.firebaseapp.com",
  databaseURL: "https://crwn-db-c8ddb.firebaseio.com",
  projectId: "crwn-db-c8ddb",
  storageBucket: "crwn-db-c8ddb.appspot.com",
  messagingSenderId: "93451918624",
  appId: "1:93451918624:web:c00d561e1c969057af4b45",
  measurementId: "G-GYBXX4RHQB",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
