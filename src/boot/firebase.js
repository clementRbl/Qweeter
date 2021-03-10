
import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBNZMjxz53B8HH3yxhXPxhVPwNfBGaahmE",
  authDomain: "qwitter-cc6b1.firebaseapp.com",
  projectId: "qwitter-cc6b1",
  storageBucket: "qwitter-cc6b1.appspot.com",
  messagingSenderId: "977841705670",
  appId: "1:977841705670:web:fa4cbe45f9c22739cb3dc7"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db