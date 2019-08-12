import React, { useEffect } from "react";
import { Typography, withStyles } from "@material-ui/core";
import Layout from "../components/Layout";

const styles = theme => ({
  text: {
    color: "white",
    textAlign: "center"
  }
});
const IndexPage = ({ classes }) => {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <Layout>
      <Typography variant="h4" className={classes.text}>
        Personal website for Brandt Willems
      </Typography>
    </Layout>
  );
};

export default withStyles(styles)(IndexPage);
