import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvOnl0UQUvU6ez0bvyFwayqA-xsjFG8IA",
  authDomain: "netflix-build-7bd5b.firebaseapp.com",
  projectId: "netflix-build-7bd5b",
  storageBucket: "netflix-build-7bd5b.appspot.com",
  messagingSenderId: "338000430988",
  appId: "1:338000430988:web:eec9c27bc006d3634e38a9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
