import firebase from 'firebase';

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDEJ1hxSIf9zRnVXduCdv5fJri0FVDVFCM",
  authDomain: "yoga-5eed8.firebaseapp.com",
  databaseURL: "https://yoga-5eed8.firebaseio.com",
  projectId: "yoga-5eed8",
  storageBucket: "yoga-5eed8.appspot.com",
  messagingSenderId: "369278455715",
});

// database
export const ashanasRef = firebase.database().ref('ashanas');
export const sequencesRef = firebase.database().ref('sequences');

// storage
export const ashanasStorageRef = firebase.storage().ref().child('ashanas/');
