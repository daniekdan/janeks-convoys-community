// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from 'firebase/auth'
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCB2UO_5Zl-96gF2tPtDcWOsZP6BXmGkoc",
      authDomain: "janeks-convoys-community.firebaseapp.com",
      projectId: "janeks-convoys-community",
      storageBucket: "janeks-convoys-community.appspot.com",
      messagingSenderId: "489660438218",
      appId: "1:489660438218:web:66694605b348bdecd54633",
      measurementId: "G-ZDHH5H6P20"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    export const db = getFirestore(app);
    export const auth = getAuth(app);
    export const user = auth.currentUser;
