import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAWDgRaKwHqzNPADHTIP7NKRKSbfwGaYn0",
    authDomain: "signin-4ab94.firebaseapp.com",
    databaseURL: "https://signin-4ab94.firebaseio.com",
    projectId: "signin-4ab94",
    storageBucket: "signin-4ab94.appspot.com",
    messagingSenderId: "749881775392",
    appId: "1:749881775392:web:4d9984d0a8176481f6b345"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;