// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase'
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDfONwryQVW3UN5EKE1XCVcxAcv6njG6kU",
//   authDomain: "whatsppclone-58099.firebaseapp.com",
//   projectId: "whatsppclone-58099",
//   storageBucket: "whatsppclone-58099.appspot.com",
//   messagingSenderId: "390672510607",
//   appId: "1:390672510607:web:e4c6248543abdcf7d94afa",
//   measurementId: "G-FT8VEX02S0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDfONwryQVW3UN5EKE1XCVcxAcv6njG6kU",
    authDomain: "whatsppclone-58099.firebaseapp.com",
    projectId: "whatsppclone-58099",
    storageBucket: "whatsppclone-58099.appspot.com",
    messagingSenderId: "390672510607",
    appId: "1:390672510607:web:e4c6248543abdcf7d94afa",
    measurementId: "G-FT8VEX02S0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth , provider};
  export default db;
    