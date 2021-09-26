import React, { useRef, useState } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar'; 
/* gravatarで写真を提供している､登録すると自分の写真使える */
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton.js';

const useStyles = makeStyles({
  root: {
    gridRow: 2, 
    /* gridで分けた時の線の位置上から数えて何番目の線か
    その直下から位置づけられる */
    margin: '26px'
  },
});

const MessageInputField = ({name}) => {
  const inputEl = useRef(null);
  const [text, setText] = useState(''); /* textが入力されているかいないか */
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return ( //↓グリッドの全体の横幅12に対しての範囲//
  <div className={classes.root}>
    <Grid container>
      <Grid item xs={1}>
        <Avatar src={avatarPath} /> {/* Avatarはアイコンの丸いやつ */}
      </Grid>
      <Grid item xs={10}>
        <MessageField
        inputEl={inputEl}
        name={name} setText={setText} text={text} />
      </Grid>
      <Grid item xs={1}>
        <MessageSubmitButton
        inputEl={inputEl}
        name={name} setText={setText} text={text} />
      </Grid>
    </Grid>
  </div>
  );
};

export default MessageInputField;