import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AssignmentIndSharpIcon from "@material-ui/icons/AssignmentIndSharp";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#00a17f",
  },
  toolbarTitle: {
    flex: 1,
    marginLeft: theme.spacing(0),
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },

  button: {
    marginRight: theme.spacing(1),
    backgroundColor: "#00ab87",
    color: "#EEFBFB",
    fontWeight: "bold",
    textTransform: "capitalize",
    borderRadius: "100px",
  },

  container: {
    display: "flex",
    align: "center",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { title } = props;
  return (
    <>
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

          {props.buttonLabel ? (
            <Button
              variant="outlined"
              size="small"
              href="/consultResident"
              className={classes.button}
              startIcon={
                <SearchIcon style={{ color: "#000000", fontSize: 25 }} />
              }
            >
              {props.buttonLabel}
            </Button>
          ) : null}
          {props.buttonGlobal ? (
            <>
              <Button
                className={classes.button}
                variant="outlined"
                size="small"
                href="register"
                startIcon={
                  <AssignmentIndSharpIcon
                    fontSize="large"
                    style={{ color: "#283747", fontSize: 25 }}
                  />
                }
              >
                Register Operator
              </Button>
              <Button
                className={classes.button}
                variant="outlined"
                size="small"
                href="registerResident"
                startIcon={
                  <AddCircleOutlineIcon
                    fontSize="large"
                    style={{ color: "#00ff5d", fontSize: 25 }}
                  />
                }
              >
                Register Resident
              </Button>
              <Button
                className={classes.button}
                variant="outlined"
                size="small"
                href="consult"
                startIcon={
                  <SearchIcon
                    color="primary"
                    style={{ color: "#000000", fontSize: 25 }}
                  />
                }
              >
                Consult
              </Button>
              <Button
                className={classes.button}
                variant="outlined"
                size="small"
                startIcon={
                  <AccountCircleIcon
                    fontSize="large"
                    color="primary"
                    style={{ color: " #EEFBFB", fontSize: 25 }}
                  />
                }
                href="/"
              >
                Login
              </Button>
            </>
          ) : null}
          {props.buttonHome ? (
            <Button
              className={classes.button}
              variant="outlined"
              size="small"
              startIcon={
                <HomeIcon style={{ color: "#d4f0bb", fontSize: 25 }} />
              }
              href="/homePage"
            >
              Home
            </Button>
          ) : null}
        </Toolbar>
      </React.Fragment>
    </>
  );
};

export default Header;
