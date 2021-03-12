import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  error: {
    color: "red",
  },
  button: {
    float: "right",
  },
}));

const PopupEdit = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    getID(props.row.id)
  };
  var getRowId = 0;

  const handleClose = () => {
    setOpen(false);
  };
    function getID(id){
      getRowId = id
    }

  const actions = [
    <Button
      type="submit"
      form="formData"
      color="primary"      
      className={classes.button}
      onClick={()=>getID(props.row.id)}
    >
      Confirm
    </Button>,
    <Button className={classes.button} onClick={handleClose} color="primary">
      Cancel
    </Button>,
  ];

  const {handleSubmit, register} = useForm({});

  function onSubmit(formData) {
    console.log(formData);
    console.log(getRowId);
    props.editItem(getRowId, formData.apartment, formData.block, formData.resident)    
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<EditIcon />}
        onClick={handleClickOpen}
      >
        {props.title}
      </Button>
      {props.fullTable === "false" ? (
        
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            maxWidth="xs"
          >
            <DialogTitle id="form-dialog-title">Edit</DialogTitle>
            <DialogContent>
              <form
                action={actions}
                method="POST"
                id="formData"
                onSubmit={handleSubmit(onSubmit)}
              >
                <TextField
                  autoFocus
                  margin="dense"
                  id="apartment"
                  name="apartment"
                  label="Apartment"
                  type="number"
                  fullWidth
                  inputRef={register({
                    required: true,
                  })}
                />

                <TextField
                  margin="dense"
                  id="block"
                  name="block"
                  label="Block"
                  type="number"
                  fullWidth
                  inputRef={register({
                    required: true,
                  })}
                />
                
                <TextField
                  margin="dense"
                  id="resident"
                  label="Resident"
                  name="resident"
                  type="text"
                  fullWidth
                  inputRef={register({
                    required: true,
                  })}
                />
                
              </form>
              {actions}
            </DialogContent>
          </Dialog>
        
      ) : null}
    </>
  );
};

export default PopupEdit;
