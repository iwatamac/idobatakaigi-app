import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';  
//@material-uiは最初ライブラリをyarn addで加えなければいけない。動画は@4.11.0//
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link 
      color="inherit" 
      href="https://twitter.com/iwatamac"
      target="_blank" //タグを増やしてリンク先を生成させる//
      rel="noopener" //遷移先のページから遷移元のページを操作できる。セキュリティの脆弱性を直す//
      >
        いわたま
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ setName }) {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState('');
  const [isComposed, setIsComposed] = useState(false);
  console.log({ disabled, string, isComposed}); //{}の意味は？//
 
  useEffect(() => {
    const disabled = string === ''
    setDisabled(disabled)
  }, [string]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="ニックネーム"
            name="name"
            autoFocus
            onChange={(e) => setString(e.target.value)}
            onKeyDown={(e) => { //keyを押した時に反応//
              if (isComposed) return; //日本語入力でEnterを押してMainに遷移されないようにisComposedで作業中だと認識させる//

              if(e.key === 'Enter') {
              setName(e.target.value);  
              e.preventDefault(); //URLが変わるデフォルトの処理を無効化//
              }
            }}
            onCompositionStart={() => setIsComposed(true)} //日本語入力のタイピング始めだけ認証される//
            onCompositionEnd={() => setIsComposed(false)} //日本語入力のタイピング終わりだけ認証される//
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={ disabled }
            onClick={() => {
              setName(string);
            }}
          >
            はじめる
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}