import firebase from 'firebase';
import "@firebase/firestore";

firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
});
firebase.firestore().settings({ timestampsInSnapshots: true });

export const  fireStore = firebase.firestore();
export const  fireBase = firebase;
export const  auth = firebase.auth();
