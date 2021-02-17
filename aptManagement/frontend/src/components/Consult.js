import React, { useState } from 'react';
import GlobalHeader from './pageComponents/GlobalHeader';
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import List from './pageComponents/List'

const useStyles = makeStyles((theme) => ({
    input: {

        margin: 'auto',
        display: 'flex',
    },
    button: {
        marginTop: theme.spacing(4),
    }
}));



const Consult = () => {
    
    const [apartament, setApartament] = useState(0);
    const [bloc, setBloc] = useState(0);
    const classes = useStyles()

    return (
        <>
        <GlobalHeader title="Consult apartment"/>
                <Container component="main" maxWidth="xs">
                    <CssBaseline>
                        <p>Apartment Number</p>

                        <Input 
                        className={classes.input}
                        onChange={event => setApartament(event.target.value)}
                        /> 
                        <p>Bloc</p>

                        <Input 
                        className={classes.input}
                        onChange={event => setBloc(event.target.value)}
                        />

                        <Button  
                            fullWidth              
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}                            
                        >Consult</Button>
                        <p>Apartamento:{apartament} Bloco:{bloc}</p> 
                    </CssBaseline>
                </Container>
                <List />
            <div id="teste"></div>
            
            
        </>
    );
};

export default Consult;