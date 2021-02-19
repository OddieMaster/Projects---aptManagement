import React , {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({

    button: {
       
        backgroundColor: "#22bb33",
        color: "white",
    
      },
      table: {
        minWidth: 650,
      }
    }));

const List = (props) => {
    
    const classes = useStyles()

    console.log(props)

    return (
        <>
        <Container>
            <CssBaseline>
                <Button variant="contained" title="add Info" className={classes.button} >Add info</Button>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Apartment</TableCell>
                        <TableCell align="right">Bloc</TableCell>
                        <TableCell align="right">Actions</TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.data.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="right">{row.apartment}</TableCell>
                        <TableCell align="right">{row.bloc}</TableCell>
                        <TableCell align="right">
                             <Button variant="contained" title="Edit" color="primary"  href="/EditPage" >Edit</Button>{" "}
                             <Button variant="contained" title="Delete" color="secondary" href="/Delete">Delete</Button>
                        </TableCell>                       
                        </TableRow>
                    ))}
                    </TableBody>

                </Table>
            </CssBaseline>
        </Container>
       </>
    
    );
};

export default List;