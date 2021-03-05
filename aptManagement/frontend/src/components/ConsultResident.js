import React, { useState } from "react";
import GlobalHeader from "./pageComponents/GlobalHeader";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "auto",
    display: "flex",
    marginTop: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

const ConsultResident = (props) => {
  const classes = useStyles();

  const [resident, setResident] = useState("");
  const [open, setOpen] = React.useState(false);
  //const [canEdit, setCanEdit] = React.useState(false);


  
  function handleClick(){
      setOpen(true)
  }

/*   function handleCanEdit(){
    setCanEdit(true)
} */

  function handleChangeResident(event) {
    let textDw = event.target.value;
    console.log({ textDw });
    setResident(textDw);
  }
  
 
  return (
    <>
      <GlobalHeader title="Consult Resident Information" buttonHome={true} />
      <Container component="main" maxWidth="xs">
        <CssBaseline>
          <p>Please, insert the name of the resident bellow</p>
          <TextField
            className={classes.input}
            value={resident}
            onChange={handleChangeResident}
          ></TextField>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClick}
          >
            Consult
          </Button>
            {open === true ?
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                    <TextField
                        className={classes.input}                        
                        label="Resident"
                        defaultValue="Oddie"
                        InputProps={{
                        readOnly: true,
                  }} ></TextField> 
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                        className={classes.input}                        
                        label="Birth Date"
                        defaultValue="03/04/1995"
                        InputProps={{
                        readOnly: true,
                  }} ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                  <TextField
                        className={classes.input}                        
                        label="Tel"
                        defaultValue="(31)994962286"
                        InputProps={{
                        readOnly: true,
                  }} ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                  <TextField
                        className={classes.input}                       
                        label="CPF"
                        defaultValue="077.898.086-30"
                        InputProps={{
                        readOnly: true,
                  }} ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                  <TextField
                        className={classes.input}                        
                        label="E-mail"
                        defaultValue="romualdo.gui@gmail.com"
                        InputProps={{
                        readOnly: true,
                  }} ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                  <TextField                                               
                        label="Apartment"
                        defaultValue="1"
                        InputProps={{
                        readOnly: true,
                  }} ></TextField>
                  <TextField                                               
                        label="Bloc"
                        defaultValue="2"
                        InputProps={{
                        readOnly: true,
                  }} ></TextField>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"                        
                        >Edit </Button>
                  </Grid>
                   : null } 
                  
           
        </CssBaseline>
      </Container>
    </>
  );
};

export default ConsultResident;
