import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(8, 0),
    marginLeft: theme.spacing(-3),
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
