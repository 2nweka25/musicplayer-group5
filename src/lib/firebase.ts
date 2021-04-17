import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7CA1YI02512p9vTmhPvGBHXb8xW46k9U",
  authDomain: "musicplayer-app.firebaseapp.com",
  projectId: "musicplayer-app",
  storageBucket: "musicplayer-app.appspot.com",
  messagingSenderId: "83316896536",
  appId: "1:83316896536:web:32116ca8fbf10e99d7a46d",
  databaseURL: "musicplayer-app.firebaseio.com",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export type UserInterface = firebase.User;
