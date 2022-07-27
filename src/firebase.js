import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAi6F327kmZc8daYKX5ro4605nmImEci2E",
    authDomain: "facebook-clone-63256.firebaseapp.com",
    projectId: "facebook-clone-63256",
    storageBucket: "facebook-clone-63256.appspot.com",
    messagingSenderId: "1020077206791",
    appId: "1:1020077206791:web:66607fb1cc529882f1e9a2",
    measurementId: "G-B6B0WKVS94"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider};
  export default db;