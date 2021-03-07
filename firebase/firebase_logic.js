// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import 'firebase/database'

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyCXPAS5lzLkO0vP7Ao4HUKfOBul2URTkyY",
    authDomain: "sheleadz-c5e0c-default-rtdb.firebaseapp.com",
    databaseURL: "https://sheleadz-c5e0c-default-rtdb.firebaseio.com/",
    projectId: "sheleadz-c5e0c-default-rtdb",
    storageBucket: "sheleadz-c5e0c-default-rtdb.appspot.com",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID",
  };
  

var admin = require("firebase-admin");

var serviceAccount = require("/sheleadz-c5e0c-firebase-adminsdk-jdxf6-6dd552b80c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sheleadz-c5e0c-default-rtdb.firebaseio.com"
});

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);