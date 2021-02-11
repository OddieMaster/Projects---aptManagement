import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { blue } from '@material-ui/core/colors';
import Footer from "./pageComponents/Footer";
import GlobalHeader from './pageComponents/GlobalHeader';

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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
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

const Register = () => {
    const classes = useStyles()

    return (
        <>
        <GlobalHeader />
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                            
                            <div className={classes.paper}>
                                <Avatar className={classes.avatar} />
                                    <Typography component="h1" variant="h5">
                                    Registration Form
                                    </Typography>

                                    <form className={classes.form} noValidate>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>

                                            <TextField
                                                autoComplete="fname"
                                                name="firstName"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                            />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                autoComplete="lname"
                                            />
                                            </Grid>
                                            <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="email"
                                                label="E-mail Address"
                                                name="email"
                                                autoComplete="email"
                                            />
                                            </Grid>
                                            <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="current-password"
                                            />
                                        </Grid>
                                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >Register
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link href="/" variant="body2">
                            Already has an account? 
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    <Footer title="Apartment Management" description="Kiper v1.0" />
</>
    );
};

export default Register;