import React, { useState } from "react";
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
import axios from "axios";
/* import { useHistory } from "react-router-dom"; */

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
  const { register, errors } = useForm({});
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const login = () => {
    const data = { email: email, password: password };
    axios
      .post("http://localhost:8081/operators/login", data)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          sessionStorage.setItem("accessToken", response.data);
        }
      });
  };

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
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="E-mail Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(event) => {
                  setemail(event.target.value);
                }}
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
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
                inputRef={register({
                  required: true,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className={classes.error}>Please insert a password</p>
              )}
              <Button
                variant="contained"
                color="inherit"
                fullWidth
                className={classes.enterButton}
                onClick={login}
              >
                Enter
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
