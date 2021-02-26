import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const PopupEdit = (props) => {
  

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

  
  function handleChangeApartment (event){
      let textAp = event.target.value;
      console.log({textAp})
      setAparment(textAp)
  }

  function handleChangeBloc(event){
      let textBloc = event.target.value;
      console.log({textBloc})
      setBloc(textBloc)
  }

  function handleChangeResident(event){
      let textDw = event.target.value;
      console.log({textDw})
      setResident(textDw)
  }
  
  //console.log(props.row.id)

  function handleCloseFunction(id){
    props.editItem(id, apartment, bloc, resident)
    setOpen(false)
    
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="apartment"
            label="Apartment"
            type="number"
            fullWidth
            value={apartment}
            onChange={handleChangeApartment}
          />
          <TextField
            margin="dense"
            id="bloc"
            label="Bloc"
            type="number"
            fullWidth
            value={bloc}
            onChange={handleChangeBloc}
          />
          <TextField
            margin="dense"
            id="resident"
            label="Resident"
            type="text"
            fullWidth
            value={resident}
            onChange={handleChangeResident}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>handleCloseFunction(props.row.id)} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopupEdit;
