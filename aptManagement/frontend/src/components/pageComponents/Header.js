import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: "  linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,116,253,1) 0%, rgba(255,253,251,1) 60%)",
    
  },
  toolbarTitle: {
    flex: 1,
    marginLeft: theme.spacing(50)
  },

  button: {
    marginRight: theme.spacing(1),
  },
}));

const Header = (props) => {
    const classes = useStyles();
    const { title } = props;
        return (
            <React.Fragment> 
                <Toolbar className={classes.toolbar}>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        {title}
                    </Typography>

                        <Button className={classes.button} variant="outlined" size="small" href="registerResident" startIcon={<AddCircleOutlineIcon  style={{ color: green[500] }} />}>
                            Register Resident
                        </Button>          
                        <Button className={classes.button} variant="outlined"  size="small" href="consult" startIcon={<SearchIcon color="primary" />} >
                            Consult
                        </Button>                        
                        <Button variant="outlined" size="small"  startIcon={<AccountCircleIcon  color="primary"/>} href="/" >
                            Login
                        </Button>
          
                </Toolbar>
         </React.Fragment>
    );
  }
  
export default Header;