import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MessageInputField from './MessageInputField';
import MessageList from './MessageList';

const useStyles = makeStyles({ /* grid-layoutの表示 */
  /* useStyleで書かれたものはreturn内のclassNameでそのまま適用する事ができる */
  root: { /* makeStylesのルールでrootが使われる */
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
  },
});

const Main = ({name}) => { //Appから渡されてくるname//
  const classes = useStyles();

  return (
  <div className={classes.root}>
    <MessageList />
    <MessageInputField name={name} /> 
  {/*   nameを持っていないとListに表示されないからname={name}
    firebaseに登録する時textと一緒にnameも一緒に登録される */}
  </div>
  );
};

export default Main;