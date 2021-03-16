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
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { handleSubmit, register } = useForm({});

  function onSubmit(formData) {
    console.log(formData);
    console.log(props.row.id);
    handleClose();
    if (props.fullTable === "false") {
      props.editItem(
        props.row.id,
        formData.apartment,
        formData.block,
        formData.resident
      );
    } else {
      props.editResident(
        props.row.id,
        formData.resident,
        formData.email,
        formData.bdate,
        formData.telephone,
        formData.cpf,
        formData.apartment,
        formData.block
      );
    }
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
            <form id="formData" onSubmit={handleSubmit(onSubmit)}>
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
                value={props.row.resident}
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                inputRef={register({
                  required: true,
                })}
              />
            </form>
            <Button
              type="submit"
              form="formData"
              color="primary"
              className={classes.button}
            >
              Confirm
            </Button>
            <Button
              className={classes.button}
              onClick={handleClose}
              color="primary"
            >
              Cancel
            </Button>
          </DialogContent>
        </Dialog>
      ) : null}

      {props.fullTable === "true" ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="xs"
        >
          <DialogTitle id="form-dialog-title">Edit Resident</DialogTitle>
          <DialogContent>
            <form id="formData" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                autoFocus
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
              <TextField
                margin="dense"
                id="email"
                label="E-mail"
                name="email"
                type="email"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                inputRef={register({
                  required: true,
                })}
              />
              <TextField
                margin="dense"
                id="bdate"
                label="Birth Date"
                name="bdate"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                inputRef={register({
                  required: true,
                })}
              />

              <TextField
                margin="dense"
                id="telephone"
                label="Telephone"
                name="telephone"
                type="text"
                fullWidth
                inputRef={register({
                  required: true,
                })}
              />
              <TextField
                margin="dense"
                id="cpf"
                label="CPF"
                name="cpf"
                type="text"
                fullWidth
                inputRef={register({
                  required: true,
                })}
              />
              <TextField
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
            </form>
            <Button
              type="submit"
              form="formData"
              color="primary"
              className={classes.button}
            >
              Confirm
            </Button>
            <Button
              className={classes.button}
              onClick={handleClose}
              color="primary"
            >
              Cancel
            </Button>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
};

export default PopupEdit;
