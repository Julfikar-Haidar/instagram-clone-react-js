import firebase from 'firebase'

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBXykCZ1YGdVfrr1aqPkdwY1MyjhPO0LPQ",
    authDomain: "instagram-clone-react-js-8f202.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-js-8f202.firebaseio.com",
    projectId: "instagram-clone-react-js-8f202",
    storageBucket: "instagram-clone-react-js-8f202.appspot.com",
    messagingSenderId: "72108942951",
    appId: "1:72108942951:web:c59949ecf4a99bb37596c2"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db,auth,storage};