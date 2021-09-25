import React, {useState} from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../config.json' /* 表示するページの切り替え */


export default () => {
  const [name, setName] = useState('');  //signInのnickname//
  //console.log({name})で動的な動きを管理するといい//

  if (config.signInEnabled && name === '') { 
    /* ・config.signInEnabledでtrueの場合ページが表示される。falseに切り替えて作業ページを作業しやすくする
         作業しやすくするためにページを表示するかしないかを切り替えるconfig.jsonに処理が書かれている   
       ・name入力後のページ遷移のための処理
         */

    return <SignIn setName={setName} />;  /* App.jsからSignIn.jsに渡る */
  } else {
    return <Main name={name} />; //nameが空じゃなかったらMainが表示される//
    }
  };
