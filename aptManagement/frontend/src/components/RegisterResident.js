import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { blue } from '@material-ui/core/colors';
import Footer from "./pageComponents/Footer";
import GlobalHeader from './pageComponents/GlobalHeader';
import { useForm } from "react-hook-form";



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: blue[500],
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    homeButton: {
        background: 'linear-gradient(45deg, #2121d6 30%, #00d4ff 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 40,
        padding: '0 30px',
        margin: theme.spacing(),
        textTransform:'capitalize',
  
      },
  }));

const RegisterResident = (props) => {

    const [apartment, setAparment] = useState([]);
    const [bloc, setBloc] = useState([]);
    const [resident, setResident] = useState([]);
    const [dtNascimento, setdtNascimento] =  useState([]);
    const [email, setEmail] =  useState([]);
    const [cpf, setCpf] =  useState([]);
    const [telefone, setTelefone] =  useState([]);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => console.log(data);

    
    function handleChangeApartment(event) {
        let textAp = event.target.value;
        console.log({ textAp });
        setAparment(textAp);
      }
      
  function handleChangeBloc(event) {
    let textBloc = event.target.value;
    console.log({ textBloc });
    setBloc(textBloc);
  }

  function handleChangeResident(event) {
    let textDw = event.target.value;
    console.log({ textDw });
    setResident(textDw);
  }

  function handleChangeDtNascimento(event) {
    let textDw = event.target.value;
    console.log({ textDw });
    setdtNascimento(textDw);
  }

  function handleChangeEmail(event) {
    let textDw = event.target.value;
    console.log({ textDw });
    setEmail(textDw);
  }

  function handleChangeCpf(event) {
    let textDw = event.target.value;
    console.log({ textDw });
    setCpf(textDw);
  }

  function handleChangeTelefone(event) {
    let textDw = event.target.value;
    console.log({ textDw });
    setTelefone(textDw);
  }

  function handleClickFinish() {
    props.addResident(resident, dtNascimento, telefone, cpf, email, apartment, bloc);
    console.log("ativou a função addResident")
  }

      const classes = useStyles()
    return (
        <>
        <GlobalHeader title="Register Resident"/>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                            
                            <div className={classes.paper}>
                                <Avatar className={classes.avatar} />
                                    <Typography component="h1" variant="h5">
                                    Register Resident Form
                                    </Typography>

                                    <form className={classes.form} onSubmit={()=> handleSubmit(handleClickFinish)}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} >

                                            <TextField                                                
                                                name="name"
                                                id="name"
                                                label="Name"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                autoFocus
                                                value={resident}
                                                onChange={handleChangeResident}
                                                inputRef={register({required: true,  maxLength: 20 })}
                                            />
                                             
                                            </Grid>
                                            <Grid item xs={12} >
                                            <TextField
                                                id="date"
                                                label="Birthday"
                                                type="date"
                                                name="bdate"
                                                required
                                                fullWidth
                                                variant="outlined"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                  shrink: true,
                                                }}
                                                value={dtNascimento}
                                                onChange={handleChangeDtNascimento}
                                                inputRef={register({required: true})}
                                            />
                                            </Grid>
                                            <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="email"
                                                label="E-mail Address"
                                                name="email"
                                                autoComplete="email"
                                                value={email}
                                                onChange={handleChangeEmail}
                                                inputRef={register({required: true})}
                                            />
                                            </Grid>

                                            <Grid item xs={12} >

                                            <TextField
                                                autoComplete="cpf"
                                                name="Cpf"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="cpf"
                                                label="CPF"
                                                value={cpf}
                                                onChange={handleChangeCpf}
                                                inputRef={register({required: true})}
                                            />
                                            </Grid>
                                            <Grid item xs={12}>
                                            <TextField
                                                autoComplete="tel"
                                                name="tel"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="tel"
                                                label="Tel"
                                               value={telefone}
                                               onChange={handleChangeTelefone}
                                               inputRef={register({required: true})}

                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>

                                            <TextField
                                                autoComplete="apartment"
                                                name="apartment"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="apartment"
                                                label="Apartment"
                                                type="number"
                                                value={apartment}
                                                onChange={handleChangeApartment}
                                                inputRef={register({required: true})}
                                            />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="bloc"
                                                label="Bloc"
                                                name="bloc"
                                                autoComplete="bloc"
                                                type="number"
                                                value={bloc}
                                                onChange={handleChangeBloc}
                                                inputRef={register({required: true})}
                                            />
                                            </Grid>
                                    </Grid>
                    <Button
                        
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        type="submit"
                        onClick={()=> handleClickFinish}
                    >Register Resident
                    </Button>   
                    <Button
                    onClick={()=> console.log(props.data)}>
                        teste                        
                    </Button>                 
                </form>
            </div>
        </Container>
    <Footer title="Apartment Management" description="Kiper v1.0" />
</>
    );
};

export default RegisterResident;