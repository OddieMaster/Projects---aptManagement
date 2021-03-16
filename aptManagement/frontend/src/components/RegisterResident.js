import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footer from "./pageComponents/Footer";
import GlobalHeader from "./pageComponents/GlobalHeader";
import { useForm } from "react-hook-form";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

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
    backgroundColor: "#6CB26C",
    margin: theme.spacing(3, 0, 2),
    color: "#ffffff",
    fontWeight: "bold",
  },
  error: {
    color: "red",
  },
  checkBox: {
    color: "green",
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function RegisterResident(props) {
  const { handleSubmit, register, errors } = useForm({});

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function onSubmit(formData) {
    console.log(formData);
    props.addResident(
      formData.resident,
      formData.bdate,
      formData.telephone,
      formData.cpf,
      formData.email,
      formData.apartment,
      formData.block
    );
    console.log("ativou!");
  }
  const [checked, setChecked] = React.useState(false);

  console.log(errors);

  const classes = useStyles();
  return (
    <>
      <GlobalHeader title="Register Resident" buttonHome={true} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar} />
          <Typography component="h1" variant="h5">
            Register Resident Form
          </Typography>

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="resident"
                  label="Name"
                  fullWidth
                  variant="outlined"
                  inputRef={register({
                    required: true,
                    minLength: 2,
                  })}
                ></TextField>
                {errors.resident && errors.resident.type === "required" && (
                  <p className={classes.error}>Invalid Name</p>
                )}
                {errors.resident && errors.resident.type === "minLength" && (
                  <p className={classes.error}>
                    This field required min lenght of 2
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="date"
                  name="bdate"
                  label="Birth Date"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputRef={register({
                    required: true,
                  })}
                ></TextField>
                {errors.bdate && errors.bdate.type === "required" && (
                  <p className={classes.error}>Invalid Date</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="email"
                  label="E-mail Address"
                  fullWidth
                  variant="outlined"
                  inputRef={register({
                    required: true,
                  })}
                ></TextField>
                {errors.email && errors.email.type === "required" && (
                  <p className={classes.error}>Invalid E-mail</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="cpf"
                  label="CPF"
                  fullWidth
                  variant="outlined"
                  inputRef={register({
                    required: true,
                  })}
                ></TextField>
                {errors.cpf && errors.cpf.type === "required" && (
                  <p className={classes.error}>Invalid CPF</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="telephone"
                  label="Tel"
                  fullWidth
                  variant="outlined"
                  inputRef={register({
                    required: true,
                  })}
                ></TextField>
                {errors.telephone && errors.telephone.type === "required" && (
                  <p className={classes.error}>Invalid Telephone</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      className={classes.checkBox}
                      checked={checked}
                      onChange={handleChange}
                      name="checked"
                      color="primary"
                    />
                  }
                  label="Want to link apartment and block?"
                />
              </Grid>
              {checked === true ? (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="number"
                      name="apartment"
                      label="Apartment"
                      variant="outlined"
                      inputRef={register({
                        required: true,
                      })}
                    ></TextField>
                    {errors.apartment &&
                      errors.apartment.type === "required" && (
                        <p className={classes.error}>
                          Invalid Apartment Number
                        </p>
                      )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      name="block"
                      label="Block"
                      variant="outlined"
                      inputRef={register({
                        required: true,
                      })}
                    ></TextField>
                    {errors.block && errors.block.type === "required" && (
                      <p className={classes.error}>Invalid Block Number</p>
                    )}
                  </Grid>
                </>
              ) : null}
            </Grid>

            <Button
              fullWidth
              variant="contained"
              color="inherit"
              className={classes.submit}
              type="submit"
            >
              Register Resident
            </Button>
            {/*  <Button onClick={() => console.log(props.data)}>teste</Button> */}
          </form>
        </div>
      </Container>
      <Footer title="Apartment Management" description="Kiper v1.0" />
    </>
  );
}

export default RegisterResident;
