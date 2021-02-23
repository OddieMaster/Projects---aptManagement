import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const PopupEdit = (props) => {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  console.log(props);
  console.log(props.id);

  function teste() {
    let id = props.id;
    console.log("teste");
    setOpen(false);
    console.log(id);
    props.deleteItems(id);
  }

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        {props.title}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Você tem certeza?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deseja realmente deletas todas as informações? O morador ainda
            permanecerá no banco de dados, porém o Apartamento e Bloco será
            deletado!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => teste()} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopupEdit;
