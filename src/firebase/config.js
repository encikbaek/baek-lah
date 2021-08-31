import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1U6YVX9heCl9q5FMXGUCkZ8dBtRHk8mI",
    authDomain: "baek-web.firebaseapp.com",
    projectId: "baek-web",
    storageBucket: "baek-web.appspot.com",
    messagingSenderId: "1008765958359",
    appId: "1:1008765958359:web:33da47a2c3e823f7ebd892",
    measurementId: "G-XMF2CK3JNC"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }