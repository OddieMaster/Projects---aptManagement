import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    marginLeft: theme.spacing(19)
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
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
         
                        <Button variant="outlined" size="small" href="consult" >
                            Consult
                        </Button>{"    "}
                        
                        <Button variant="outlined" size="small" href="/" >
                            Login
                        </Button>
          
                </Toolbar>
         </React.Fragment>
    );
  }
  
export default Header;