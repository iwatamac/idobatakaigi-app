import React, { useEffect,useRef } from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';

import { gravatarPath } from '../gravatar';

const MessageItem = ({ isLastItem, name, text }) => {
  const ref = useRef(null);
  const avatarPath = gravatarPath(name);

  useEffect(() => {
    if (isLastItem) {
       // 真の時、ここでscrollする//
       ref.current.scrollIntoView({ behavior: 'smooth' }); 
       /* ref.current.scrollIntoViewで最後のメッセージ表示の時に自動的にスクロールされる
          behavior: 'smooth'はスクロールの動き */
    }
  }, [isLastItem]);

  return (
    <ListItem divider={true} ref={ref} > {/* メッセージの下に下線をつける */}
        <ListItemAvatar>
          <Avatar src={avatarPath} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {text}
              </Typography>
          }
        />
      </ListItem>
    
     

  );
};

export default MessageItem;
