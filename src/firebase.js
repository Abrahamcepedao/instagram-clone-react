import firebase from  "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBu140zzBMFKpGsHcI9mXSB1EgEmyXoKnQ",
  authDomain: "instragam-clone-11576.firebaseapp.com",
  databaseURL: "https://instragam-clone-11576.firebaseio.com",
  projectId: "instragam-clone-11576",
  storageBucket: "instragam-clone-11576.appspot.com",
  messagingSenderId: "657271243092",
  appId: "1:657271243092:web:9cf7eb3661169711c108c1",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage()

export { db, auth, storage };