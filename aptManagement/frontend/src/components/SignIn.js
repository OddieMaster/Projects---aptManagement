import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: blue[500],
  
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    enterButton: {
      marginLeft: theme.spacing(10),
      marginTop: theme.spacing(2),
    },
    registerButton: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
          
    },
    homeButton: {
      background: 'linear-gradient(45deg, #2121d6 30%, #00d4ff 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 40,
      padding: '0 30px',
      margin: theme.spacing(),
      textTransform:'capitalize',

    },
  }));
  
const SignIn = () => {

    const classes = useStyles();
    return (
         < >

                <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    href="/home"
                    className={classes.homeButton}
                >home</Button>

            <Container component="main" maxWidth="xs">
                <CssBaseline>

                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}></Avatar>
                                <Typography component="h1" variant="h5">
                                Login
                                </Typography>
                                <form className={classes.form} noValidate>  
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="E-mail Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        autoFocus
                                    />
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            className={classes.enterButton}
                                        >Enter</Button>

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            href="/register"
                                            className={classes.registerButton}
                                        >Register</Button>
                                        
                                
                                </form>
                        </div>
                    
                </CssBaseline>
            </Container>
        </>
    );
};

export default SignIn;