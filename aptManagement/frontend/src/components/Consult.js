import React, { useState } from "react";
import GlobalHeader from "./pageComponents/GlobalHeader";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "./pageComponents/List";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "auto",
    display: "flex",
  },
  button: {
    marginTop: theme.spacing(4),
  },
  container: {
    background: "#c3d6e2",
    border: "solid 1px",
    borderRadius: "20px",
    marginTop: theme.spacing(1),
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
    backgroundColor: "#ffffff",
    color: "#009879",
    fontWeight: "bold",
  },
}));

const Consult = (props) => {
  const [resident, setResident] = useState("");
  const [block, setBlock] = useState("");
  const [apartment, setApartment] = useState("");

  function searchItem(rows) {
    if (resident === "" && block === "" && apartment === "") {
      console.log("entrou todos");
      return rows;
    } else if (resident !== "" && block === "" && apartment === "") {
      console.log("entrou resident");
      return rows.filter(
        (row) => row.resident.toLowerCase().indexOf(resident.toLowerCase()) > -1
      );
    } else if (block !== "" && resident === "" && apartment === "") {
      console.log("entrou block");
      return rows.filter((row) => row.block === block);
    } else if (apartment !== "" && block === "" && resident === "") {
      console.log("entrou apartment");
      return rows.filter((row) => row.apartment === apartment);
    } else if (block !== "" && apartment !== "" && resident === "") {
      console.log("entrou block e aparment");
      return rows.filter(
        (row) => row.apartment === apartment && row.block === block
      );
    } else if (block !== "" && apartment === "" && resident !== "") {
      console.log("entrou block e resident");
      return rows.filter(
        (row) =>
          row.resident.toLowerCase().indexOf(resident.toLowerCase()) > -1 &&
          row.block === block
      );
    } else if (block === "" && apartment !== "" && resident !== "") {
      console.log("entrou apartment e resident");
      return rows.filter(
        (row) =>
          row.resident.toLowerCase().indexOf(resident.toLowerCase()) > -1 &&
          row.apartment === apartment
      );
    } else if (block !== "" && apartment !== "" && resident !== "") {
      console.log("entrou apartment, block e resident");
      return rows.filter(
        (row) =>
          row.resident.toLowerCase().indexOf(resident.toLowerCase()) > -1 &&
          row.apartment === apartment &&
          row.block === block
      );
    }
    return rows;
  }

  const classes = useStyles();

  return (
    <div
      style={{
        background: "#E7FFE7",
      }}
    >
      <GlobalHeader
        buttonLabel="Consult Resident Information"
        title="Consult and link apartment and block bellow"
        buttonHome={true}
      />
      <br />
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline>
          <p>Apartment Number</p>

          <TextField
            className={classes.input}
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
          />

          <p>Block</p>

          <TextField
            className={classes.input}
            value={block}
            onChange={(e) => setBlock(e.target.value)}
          />

          <p>Resident</p>

          <TextField
            className={classes.input}
            value={resident}
            onChange={(e) => setResident(e.target.value)}
          />
          <br />
        </CssBaseline>
      </Container>
      <List
        data={searchItem(props.data)}
        addItem={props.addItem}
        deleteItem={props.deleteItem}
        editItem={props.editItem}
        editResident={props.editResident}
      />
    </div>
  );
};

export default Consult;
