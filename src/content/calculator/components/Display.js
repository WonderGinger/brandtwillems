import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  display: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    textAlign: "right",
    fontWeight: 200,
    flex: "0 0 auto",
    width: "100%",
  },
  text: {
    fontSize: "2.5rem",
    padding: "0.2rem 0.7rem 0.1rem 0.5rem",
  }
}))

const Display = ({ value }) => {
  const classes = useStyles();
  return (
    <div className={classes.display}>
      <div className={classes.text}>
        {value}
      </div>
    </div>
  )
}

export default Display
