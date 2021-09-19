import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

import { pushMessage } from '../firebase';

const MessageField = ({ inputEl, name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);

  return <TextField
  autoFocus //入力カーソル自動でつける
  fullWidth={true} //fullWidth{true}は横幅めいいっぱい//
  inputRef={inputEl}
  onChange={(e) => {setText(e.target.value)//記述の意味//
  }}
  onKeyDown={(e) => { //keyを押した時に反応//
    if (isComposed) return; //日本語入力でEnterを押してMainに遷移されないようにisComposedで作業中だと認識させる//

    const text = e.target.value;
    if (text === '') return;

    if(e.key === 'Enter') {
      pushMessage({name, text});
      setText(''); //ボタン後のフィールドを空にする//
      e.preventDefault(); //URLが変わるデフォルトの処理を無効化//
    }
  }}
  onCompositionStart={() => setIsComposed(true)} //日本語入力のタイピング始めだけ認証される//
  onCompositionEnd={() => setIsComposed(false)} //日本語入力のタイピング終わりだけ認証される//
  value={text}
  />;  
};

export default MessageField;