import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Footer from "./pageComponents/Footer";
import GlobalHeader from "./pageComponents/GlobalHeader";
import { useForm } from "react-hook-form";

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
    marginTop: theme.spacing(1),
  },
  enterButton: {
    marginLeft: theme.spacing(11.5),
    marginTop: theme.spacing(2),
    backgroundColor: "#6CB26C",
    color: "#ffffff",
    fontWeight: "bold",
  },
  registerButton: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    backgroundColor: "#6CB26C",
    color: "#ffffff",
    fontWeight: "bold",
  },
  error: {
    color: "red",
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm({});

  function onSubmit(formData) {
    console.log(formData);
  }

  return (
    <div
      style={{
        background: "#F3FFE7",
      }}
    >
      <GlobalHeader buttonHome={true} />

      <Container component="main" maxWidth="xs">
        <CssBaseline>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="E-mail Address"
                name="email"
                autoComplete="email"
                autoFocus
                inputRef={register({
                  required: true,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className={classes.error}>Invalid E-mail</p>
              )}
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                inputRef={register({
                  required: true,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className={classes.error}>Please insert a password</p>
              )}
              <Button
                type="submit"
                variant="contained"
                color="inherit"
                className={classes.enterButton}
              >
                Enter
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="inherit"
                href="/register"
                className={classes.registerButton}
              >
                Register
              </Button>
            </form>
          </div>
        </CssBaseline>
      </Container>
      <Footer title="Apartment Management" description="Kiper v1.0" />
    </div>
  );
};

export default SignIn;
