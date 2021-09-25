import React, {useState} from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../config.json'


export default () => {
  const [name, setName] = useState('');  //signInのnickname//
  //console.log({name})で動的な動きを管理するといい//

  if (config.signInEnabled && name === '') { //ページ遷移のための処理//
    return <SignIn setName={setName} />;  /* App.jsからSignIn.jsに渡る */
  } else {
    return <Main name={name} />;
    }
  };
