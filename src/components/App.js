import React, {useState} from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../config.json'


export default () => {
  const [name, setName] = useState('');

  if (config.signInEnabled && name === '') { //ページ遷移のための処理//
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
    }
  };
