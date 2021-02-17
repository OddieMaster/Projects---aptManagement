import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

const PopupEdit = (props) => {



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
            <>
                <Button variant="contained" color="primary"  onClick={handleClickOpen}>
                    {props.title}
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Apartment, bloc and dweller</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        O apartamento atual é o: 1
                    </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="apartment"
                    label="Apartment"
                    type="number"
                    fullWidth
                />
                   <DialogContentText>
                        O bloco atual é o: 1
                    </DialogContentText>
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
                    Overwrite
                </Button>
            </DialogActions>
      </Dialog>
    </>

    );
};

export default PopupEdit;