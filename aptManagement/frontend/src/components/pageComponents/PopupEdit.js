import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from '@material-ui/icons/Edit';


const PopupEdit = (props) => {
  

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    
    setOpen(false);
  };

  const [apartment, setAparment] = useState([]);
  const [block, setBlock] = useState([]);
  const [resident, setResident] = useState([]);

  
  function handleChangeApartment (event){
      let textAp = event.target.value;
      setAparment(textAp)
  }

  function handleChangeBlock(event){
      let textBlock = event.target.value;
      setBlock(textBlock)
  }

  function handleChangeResident(event){
      let textDw = event.target.value;
      setResident(textDw)
  }
  
  //console.log(props.row.id)

  function handleCloseFunction(id){
    props.editItem(id, apartment, block, resident)
    setOpen(false)
    
  }

  return (
    <>
      <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={handleClickOpen}>
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
            id="block"
            label="Block"
            type="number"
            fullWidth
            value={block}
            onChange={handleChangeBlock}
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
