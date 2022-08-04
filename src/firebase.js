
import {getStorage,} from 'firebase/storage';
// import "dotenv/config"
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.API_KEY|| "AIzaSyAi6F327kmZc8daYKX5ro4605nmImEci2E",
  authDomain: process.env.AUTH_DOMAIN || "facebook-clone-63256.firebaseapp.com",
  projectId: process.env.PROJECT_ID || "facebook-clone-63256",
  storageBucket: process.env.STORAGE_BUCKET || "facebook-clone-63256.appspot.com",
  messagingSenderId: process.env.MSG_SENDER_ID || "1020077206791",
  appId: process.env.APP_ID || "1:1020077206791:web:66607fb1cc529882f1e9a2",
  measurementId: process.env.MESUREMENT_ID || "G-B6B0WKVS94",
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(auth);


  export { db, auth, provider, signInWithPopup };
  