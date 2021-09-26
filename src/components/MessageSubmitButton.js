import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from '../firebase';

const MessageSubmitButton = ({inputEl, name, setText, text}) => {
  return (
    <IconButton disabled={text === ''} 
    onClick={() => {
      pushMessage({name, text});
      setText('');
      inputEl.current.focus(); /* firebase登録後focusが継続して当たる */
    }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton