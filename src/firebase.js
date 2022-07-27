// import firebase from "firebase/compat/app"

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyAi6F327kmZc8daYKX5ro4605nmImEci2E",
  authDomain: "facebook-clone-63256.firebaseapp.com",
  projectId: "facebook-clone-63256",
  storageBucket: "facebook-clone-63256.appspot.com",
  messagingSenderId: "1020077206791",
  appId: "1:1020077206791:web:66607fb1cc529882f1e9a2",
  measurementId: "G-B6B0WKVS94"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(auth);


  export { db, auth, provider, signInWithPopup };
  