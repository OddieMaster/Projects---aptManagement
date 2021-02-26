import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "auto",
    display: "flex",
  },
  button: {
    marginTop: theme.spacing(4),
    backgroundColor: "#22bb33",
    color: "white"
  },
}));

const AddInfoPage = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [apartment, setAparment] = useState([]);
  const [bloc, setBloc] = useState([]);
  const [resident, setResident] = useState([]);

  const classes = useStyles();

  function handleChangeApartment(event) {
    let textAp = event.target.value;
    console.log({ textAp });
    setAparment(textAp);
  }

  function handleChangeBloc(event) {
    let textBloc = event.target.value;
    console.log({ textBloc });
    setBloc(textBloc);
  }

  function handleChangeResident(event) {
    let textDw = event.target.value;
    console.log({ textDw });
    setResident(textDw);
  }

  function handleClickFinish() {
    props.addItem(apartment, bloc, resident);
    console.log(apartment)
    setOpen(false);
  }

  return (
    <>
      <Button variant="outlined" color="primary" className={classes.button} onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Register Information</DialogTitle>
        <DialogContent>
          <p>Apartment Number</p>

          <Input
            className={classes.input}
            autoFocus
            id="aparment"
            value={apartment}
            onChange={handleChangeApartment}
          />

          <p>Bloc</p>

          <Input
            className={classes.input}
            id="bloc"
            value={bloc}
            onChange={handleChangeBloc}
          />
          <p> Resident</p>
          <Input
            className={classes.input}
            id="resident"
            value={resident}
            onChange={handleChangeResident}
          />
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleClickFinish}
          >
            Submit
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={handleClose}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddInfoPage;
