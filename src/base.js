import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBi3poKYiQc8aqA2BXwJBY7UIwsEpD2Sag",
    authDomain: "react-recette-8cb35.firebaseapp.com",
    databaseURL: "https://react-recette-8cb35-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
