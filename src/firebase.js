import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHfWOCmvTszwk8jxnv5lkjkUiFuBZOuOg",
    authDomain: "clone-83491.firebaseapp.com",
    projectId: "clone-83491",
    storageBucket: "clone-83491.appspot.com",
    messagingSenderId: "620515295598",
    appId: "1:620515295598:web:a3f33f0c20b776fba2417f",
    measurementId: "G-L42GPRFPFG"
};


const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth }