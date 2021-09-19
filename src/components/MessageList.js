import React, { useEffect, useState } from 'react';
import {List} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MessageItem from './MessageItem'
import { messagesRef } from '../firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1, //グリッドの線の位置//
    overflow: 'auto',
    width: '100%',
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([])
  const classes = useStyles();

  useEffect(() => {
    messagesRef
    .orderByKey() //orderByKeyはkeyの順番で取得。時系列順。
    .limitToLast(10) //レンダリングした時にfirebaseから送られてくる件数
    .on('value', (snapshot) => {  //valueはfirebase上のデータ見たいなもの                                                   
      // key: 〇〇, value: {name: "はむさん", text: "こんにちは"}　firebaseのデータ
      // {key: 〇〇, name: "はむさん", text: "こんにちは"} ←アプリでオブジェクトとして扱うためこう変更したい
      const messages = snapshot.val();
      if (messages === null) return;

      const entries = Object.entries(messages); //配列にkeyを並べる
      const newMessages = entries.map(entry => {
        const [key, nameAndText] = entry; // const key = entry[0]; const nameAndText = entry[1];
        return {key, ...nameAndText };  //firebaseからアプリ内で扱えるように並び替え
      });
      setMessages(newMessages);
    });  
  },[]);

  const length = messages.length;
 
  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }, index) => {
        const isLastItem = length === index + 1;

        return (
        <MessageItem
         key={key} 
         name={name} 
         text={text}
         isLastItem={isLastItem} 
        />
       ); 
      })}
    </List>
    );
};

export default MessageList;