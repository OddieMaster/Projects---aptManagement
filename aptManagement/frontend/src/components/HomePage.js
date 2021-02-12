import React from 'react';
import Footer from "./pageComponents/Footer";
import Header from './pageComponents/Header';
import condominio from "../images/condominio.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    img: {
    margin: 'auto',
    display: 'flex',
    width: 1200,
    height: 650,
    },
}));


const HomePage = () => {
    const classes = useStyles()
    return (
        <>
        <Header title="Welcome [User]" />

            <img src={condominio} alt="condominio" className={classes.img} ></img>   

        <Footer title="Apartment Management" description="Kiper v1.0" />
        </>
    );
};

export default HomePage;