import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "auto",
    display: "flex",
  },
  button: {
    marginTop: theme.spacing(4),
    backgroundColor: "#22bb33",
    color: "white",
  },
  formControl: {
    minWidth: 120,
    width: 300,
  },
  error: {
    color: "red",
  },
  submit: {
    backgroundColor: "#6CB26C",
    margin: theme.spacing(3, 0, 2),
    color: "#ffffff",
    fontWeight: "bold",
  },
}));

const AddInfoPage = (props) => {
  const [open, setOpen] = React.useState(false);
  const { handleSubmit, register, control, errors } = useForm({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function onSubmit(formData) {
    console.log(formData);
  }

  const classes = useStyles();

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        startIcon={<AddCircleIcon />}
        onClick={handleClickOpen}
      >
        {props.title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Link apt and block to resident
        </DialogTitle>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <p>Apartment Number</p>

            <Input
              className={classes.input}
              autoFocus
              id="apartment"
              name="apartment"
              inputRef={register({
                required: true,
              })}
            />
            {errors.apartment && errors.apartment.type === "required" && (
              <p className={classes.error}>Invalid Apartment</p>
            )}

            <p>Block</p>

            <Input
              className={classes.input}
              id="block"
              name="block"
              inputRef={register({
                required: true,
              })}
            />
            {errors.block && errors.block.type === "required" && (
              <p className={classes.error}>Invalid Block</p>
            )}
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel id="resident">Resident</InputLabel>
              <Controller
                as={
                  <Select
                    labelId="selectResident"
                    id="selectResident"
                    name="resident"
                    defaultValue=""
                  >
                    {props.data.map((row) => (
                      <MenuItem value={row.resident || ""} key={row.id}>
                        {row.resident}
                      </MenuItem>
                    ))}
                  </Select>
                }
                name="Select"
                control={control}
                rules={{
                  required: true,
                }}
                defaultValue=""
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              fullWidth
              className={classes.submit}
              type="submit"
              variant="contained"
              color="inherit"
            >
              Submit
            </Button>
            <Button
              className={classes.submit}
              fullWidth
              variant="contained"
              onClick={handleClose}
              color="inherit"
            >
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AddInfoPage;
