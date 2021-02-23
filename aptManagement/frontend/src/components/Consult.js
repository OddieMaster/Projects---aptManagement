import React, { useState } from "react";
import GlobalHeader from "./pageComponents/GlobalHeader";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "./pageComponents/List";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import Footer from "./pageComponents/Footer";
import AddInfoPage from "./pageComponents/AddInfoPage";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "auto",
    display: "flex",
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

const Consult = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <>
      <GlobalHeader title="Consult apartment" />
      <Container component="main" maxWidth="xs">
        <CssBaseline>
          <AddInfoPage data={props.data} addItem={props.addItem} />
          {/*   <p>Apartment Number</p>

          <Input className={classes.input} autoFocus />

          <p>Bloc</p>

          <Input className={classes.input} />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {" "}
            Consult
            {props.title}{" "}
          </Button> */}
        </CssBaseline>
      </Container>
      <List data={props.data} deleteItem={props.deleteItem} />
      <Footer title="Apartment Management" description="Kiper v1.0" />
    </>
  );
};

export default Consult;
