import React, {useState}  from "react";
import GlobalHeader from "./pageComponents/GlobalHeader";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "./pageComponents/List";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Footer from "./pageComponents/Footer";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "auto",
    display: "flex",
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));
 


const Consult = (props) => {

	const [resident, setResident] = useState([]);
	const [bloc, setBloc] = useState([]);
	const [apartment, setApartment] = useState([]);

	function searchItem(rows) {
		return rows.filter((row) => row.resident.toLowerCase().indexOf(resident) > -1   );
	  }

  const classes = useStyles();
  console.log(resident);
  return (
    <>
      <GlobalHeader title="Consult apartment" />
      <Container component="main" maxWidth="xs">
        <CssBaseline>
           <p>Apartment Number</p>

		   <TextField
            className={classes.input}
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
          />

          <p>Bloc</p>

          <TextField
            className={classes.input}
            value={bloc}
            onChange={(e) => setBloc(e.target.value)}
          /> 

          <p>Resident</p>

          <TextField
            className={classes.input}
            value={resident}
            onChange={(e) => setResident(e.target.value)}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {" "}
            Consult
            {props.title}{" "}
          </Button>
        </CssBaseline>
      </Container>
      <List
        data={searchItem(props.data)}
		addItem={props.addItem}
        deleteItem={props.deleteItem}
        editItem={props.editItem}
		
      />
      <Footer title="Apartment Management" description="Kiper v1.0" />
    </>
  );
};

export default Consult;
