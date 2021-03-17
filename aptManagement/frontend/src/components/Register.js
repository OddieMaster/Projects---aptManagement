import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footer from "./pageComponents/Footer";
import GlobalHeader from "./pageComponents/GlobalHeader";
import { useForm } from "react-hook-form";
import PopUpConfirmation from "./pageComponents/PopUpConfirmation";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#6CB26C",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#6CB26C",
    color: "#ffffff",
    fontWeight: "bold",
  },
  error: {
    color: "red",
  },
}));

const Register = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm({});

  function onSubmit(formData) {
    console.log(formData);
    <PopUpConfirmation />
  }

  return (
    <>
      <GlobalHeader buttonHome={true} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar} />
          <Typography component="h1" variant="h5">
            Registration Form
          </Typography>

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.firstName && errors.firstName.type === "required" && (
                  <p className={classes.error}>Invalid Name</p>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.lastName && errors.lastName.type === "required" && (
                  <p className={classes.error}>Invalid Name</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="E-mail Address"
                  name="email"
                  autoComplete="email"
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className={classes.error}>Invalid E-mail</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className={classes.error}>Invalid Password</p>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="inherit"
              className={classes.submit}
            >
              Register
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
