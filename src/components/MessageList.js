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

  useEffect(() => { /* 無限ループを抜け出すため */
    messagesRef
    .orderByKey() //orderByKeyはkeyの順番で取得。時系列順。
    .limitToLast(10) //制限クエリ。レンダリングした時に直近のfirebaseから送られてくる件数
    .on('value', (snapshot) => {  //valueはデータを読み取るという事。snapshot=データ                                                 
      // key: 〇〇, value: {name: "はむさん", text: "こんにちは"} firebaseのデータ
      // {key: 〇〇, name: "はむさん", text: "こんにちは"} ←アプリでオブジェクトとして扱うためこう変更したい
      const messages = snapshot.val(); /* val()でデータをとりだす */
      if (messages === null) return; /* firebase内にデータが一件もない場合以後の処理を中止する */

      const entries = Object.entries(messages); //配列にkeyを並べる
      const newMessages = entries.map(entry => {
        const [key, nameAndText] = entry; 
        // const key = entry[0]; const nameAndText = entry[1] ...というのは展開するという意味
        return {key, ...nameAndText };  //firebaseからアプリ内で扱えるように並び替え
      });
      setMessages(newMessages); /* messagesが更新される */
    });  
  },[]);

  const length = messages.length;
 
  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }, index) => { /* 渡ってくるオブジェクト、key,name,text */
        const isLastItem = length === index + 1; 
        /* 最後の投稿を画面に表示させたいからindexを引数に持ってきて最後の番号を読み取る
        indexは0からはじまるから+1する */

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