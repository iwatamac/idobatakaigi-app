import firebase from 'firebase'

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,

} = process.env; //環境変数の集合体みたいなもの//

  const firebaseConfig = {

    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  export const messagesRef = database.ref('messages');
  /* messageを取得するためにrefが必要なので他のファイルから取り出せるようにexport */

  export const pushMessage = ({name, text}) => {
    messagesRef.push({name, text})
  }
