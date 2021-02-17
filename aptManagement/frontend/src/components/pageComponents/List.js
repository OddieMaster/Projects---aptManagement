import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PopupEdit from './PopupEdit';
import Popup from './PopupAdd';
import PopupDelete from './PopupDelete';

const useStyles = makeStyles((theme) => ({

    button: {
       
        backgroundColor: "#22bb33",
        color: "white",
    
      },
      table: {
        minWidth: 650,
      }
    }));

const List = () => {
    
    const classes = useStyles()

    const [data, setData] = useState([
        {id: 1, apartment: "1", bloc: "1"},
        {id: 2, apartment: "2", bloc: "1"},
        {id: 3, apartment: "1", bloc: "2"},
        {id: 4, apartment: "2", bloc: "2"},
        {id: 5, apartment: "1", bloc: "3"},
        {id: 6, apartment: "2", bloc: "3"},
        ])

    return (
        <>
        <Container>
            <CssBaseline>
                <Button variant="contained" title="add Info" component={Popup} >Add info</Button>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="right">Apartment</TableCell>
                                <TableCell align="right">Bloc</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                {data.map((data) => (
                                    <TableRow key={data.id}>
                                    <TableCell component="th" scope="row">
                                    {data.id}
                                    </TableCell>
                                    <TableCell align="right">{data.apartment}</TableCell>
                                    <TableCell align="right">{data.bloc}</TableCell>
                                    <TableCell align="right">
                                        <Button  title="Edit"component={PopupEdit}>Edit</Button>{"   "}
                                        <Button  title="Delete" component={PopupDelete}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CssBaseline>
        </Container>
        
        </>
    );
};

export default List;