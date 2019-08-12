import React from "react";
import Layout from "../components/Layout";
import { Typography, makeStyles } from "@material-ui/core";

const NotFound = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Typography className={classes.text}>This page does not exist :(</Typography>
    </Layout>
  );
};

export default NotFound;

const useStyles = makeStyles(theme => ({
  text: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    fontSize: 36
  }
}))