import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme=> ({
  link: {
    color: "unset",
    textDecoration: "none",
    "&:hover": {
      color: "unset",
      textDecoration: "none"
    }
  }
});

const UnstyledLink = ({ children, classes, to, outside }) =>{ 
  if (outside) return (
    <a className={classes.link} href={to}>
      {children}
    </a>
  )
  return (
    <Link className={classes.link} to={to}>
      {children}
    </Link>
)};

export default withStyles(styles)(UnstyledLink);
