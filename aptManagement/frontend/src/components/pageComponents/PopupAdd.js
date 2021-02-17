import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    button: {
       
        backgroundColor: "#22bb33",
        color: "white",
    
      },
}));

const Popup = (props) => {

    const classes = useStyles()

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
            <div>
                <Button variant="outlined" color="primary" className={classes.button} onClick={handleClickOpen}>
                    {props.title}
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Apartment, bloc and dweller</DialogTitle>
                    <DialogContent>

                <TextField
                    autoFocus
                    margin="dense"
                    id="apartment"
                    label="Apartment"
                    type="number"
                    fullWidth
                />
                  <TextField
                    margin="dense"
                    id="bloc"
                    label="Bloc"
                    type="number"
                    fullWidth
                />
                
        </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Add
                </Button>
            </DialogActions>
      </Dialog>
    </div>

    );
};

export default Popup;