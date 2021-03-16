import React from "react";
import Footer from "./pageComponents/Footer";
import GlobalHeader from "./pageComponents/GlobalHeader";
import condominio from "../images/condominio.png";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  img: {
    margin: "auto",
    display: "flex",
    width: 1200,
    height: 640,
    border: "solid 1px",
    borderColor: "green",
    borderRadius: "40px",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        background: "#F3FFE7",
      }}
    >
      <GlobalHeader title="Welcome, Guilherme" buttonGlobal={true} />
      <br />
      <Container>
        <img src={condominio} alt="condominio" className={classes.img}></img>
      </Container>
      <Footer title="Apartment Management" description="Kiper v1.0" />
    </div>
  );
};

export default HomePage;
