import React, {useState}  from 'react';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalHeader from './GlobalHeader';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    input: {

        margin: 'auto',
        display: 'flex',
    },
    button: {
        marginTop: theme.spacing(4),
    }
}));


const AddInfoPage = (props) => {

    const [apartment, setAparment] = useState([]);
    const [bloc, setBloc] = useState([]);
    const [resident, setResident] = useState([]);

    const classes = useStyles()


    function handleChangeApartment (event){
        let textAp = event.target.value;
        console.log({textAp})
        setAparment(textAp)
    }

    function handleChangeBloc(event){
        let textBloc = event.target.value;
        console.log({textBloc})
        setBloc(textBloc)
    }

    function handleChangeResident(event){
        let textDw = event.target.value;
        console.log({textDw})
        setResident(textDw)
    }
    
    console.log(props)

    return (
        <>  
           {/*  <GlobalHeader title="Add Resident, Aparment and Bloc" /> */}
             <Container component="main" maxWidth="xs">
                    <CssBaseline>
                <p>Apartment Number</p>

                <Input 
                    className={classes.input}
                    autoFocus
                    id="aparment"
                    value={apartment}
                    onChange={handleChangeApartment}
                /> 

                <p>Bloc</p>

                <Input 
                    className={classes.input}
                    id="bloc"
                    value={bloc}
                    onChange={handleChangeBloc}
                />
                <p> Resident</p>
                 <Input 
                    className={classes.input}
                    id="resident"
                    value={resident}
                    onChange={handleChangeResident}
                />

                <Button  
                    fullWidth              
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}  
                    onClick={(() => props.addItem(apartment, bloc, resident))}                        
                >Submit </Button>
                </CssBaseline>
                </Container>
            {/*     <Footer  title="Apartment Management" description="Kiper v1.0"/> */ }
        </>
    );
};

export default AddInfoPage;