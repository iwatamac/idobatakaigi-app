import firebase from 'firebase'
  const firebaseConfig = {
    apiKey: "AIzaSyDx83gennNLCSDONnM2yQHhhGFVA5Ora4Q",
    authDomain: "idobatakaigi-with-ham-8c921.firebaseapp.com",
    projectId: "idobatakaigi-with-ham-8c921",
    storageBucket: "idobatakaigi-with-ham-8c921.appspot.com",
    messagingSenderId: "297335428839",
    appId: "1:297335428839:web:01a679de89d909350df442"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messageRef = database.ref('messages');

  export const pushMessage = ({name, text}) => {
    messageRef.push({name, text})
  }
