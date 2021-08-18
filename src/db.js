import firebase from 'firebase/app';
import 'firebase/database';


const config = {
    //clé API de firebase
    apiKey: "AIzaSyD-ztDAvP0BVRleOtTft4Qefu-ZBIWYWNw",
    authDomain: "vuechat-ad712.firebaseapp.com",
    projectId: "vuechat-ad712",
    storageBucket: "vuechat-ad712.appspot.com",
    messagingSenderId: "569837125161",
    appId: "1:569837125161:web:5cd79c92281a495d896638"
}

const db = firebase.initializeApp(config);
export default db;