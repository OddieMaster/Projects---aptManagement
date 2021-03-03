import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

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
                <Toolbar className={classes.toolbar} >
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
                        {props.buttonLabel ? 
                              <Button 
                                variant="outlined"
                                size="small"
                                href="/consultResident"
                                className={classes.button}
                                startIcon={<SearchIcon color="primary" />}
                                >{props.buttonLabel}</Button> : null}  
                        <Button variant="outlined" size="small" startIcon={<HomeIcon style={{ color: green[500] }}/>} href="/homePage" >
                            Home
                        </Button>    
                                                
                </Toolbar>
         </React.Fragment>
    );
  }
  
export default Header;