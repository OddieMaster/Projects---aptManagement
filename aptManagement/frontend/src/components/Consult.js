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

	const [resident, setResident] = useState("");
	const [bloc, setBloc] = useState("");
	const [apartment, setApartment] = useState("");

  

 	function searchItem(rows) {

    if (resident === "" && bloc === "" && apartment === ""){
      console.log("entrou todos")
    return rows
     
    } else if (resident !== "" && bloc === "" && apartment === ""){
      console.log("entrou resident")
    return rows.filter(row => row.resident.toLowerCase().indexOf(resident.toLowerCase()) > -1)

    } else if (bloc !== "" && resident === "" && apartment === ""){
      console.log("entrou bloc")
    return rows.filter(row => row.bloc === bloc)

    } else if (apartment !== "" && bloc === "" && resident === ""){
      console.log("entrou apartment")
    return rows.filter(row => row.apartment === apartment )

    } else if (bloc !== "" && apartment !== "" && resident === "" ){
      console.log("entrou bloc e aparment")
      return rows.filter(row=> row.apartment === apartment && row.bloc === bloc)

    } else if (bloc !== "" && apartment === "" && resident !== "" ){
      console.log ("entrou bloc e resident")
      return rows.filter(row=> row.resident.toLowerCase().indexOf(resident.toLowerCase()) > -1 && row.bloc === bloc  )

    } else if (bloc === "" && apartment !== "" && resident !== "" ){
      console.log ("entrou apartment e resident")
      return rows.filter(row=> row.resident.toLowerCase().indexOf(resident.toLowerCase()) > -1 && row.apartment === apartment  )

    } else if (bloc !== "" && apartment !== "" && resident !== "" ){
      console.log ("entrou apartment, bloc e resident")
      return rows.filter(row=> row.resident.toLowerCase().indexOf(resident.toLowerCase()) > -1 && row.apartment === apartment &&  row.bloc === bloc)
    }  
  return rows
}
    
  const classes = useStyles();

  return (
    <>      
    <GlobalHeader buttonLabel ="Consult Resident Information" title="Consult apartment"  />    
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
