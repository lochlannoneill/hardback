import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPoDsMjKSBEXuGvtZPRB51juKtkZjbvuk",
    authDomain: "hardback-39c70.firebaseapp.com",
    projectId: "hardback-39c70",
    storageBucket: "hardback-39c70.appspot.com",
    messagingSenderId: "580200818211",
    appId: "1:580200818211:web:5589c03061a4d0dec37396",
    measurementId: "G-VXKRC07GYV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
