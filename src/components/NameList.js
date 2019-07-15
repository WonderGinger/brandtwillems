import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    textAlign: 'center',
    fontSize: 'calc(10px + 2vmin)',
  }
}));

const NameList = ({ names }) => {
  const classes = useStyles();
  if (!names) return;
  return (
    <div className={classes.container}>
      {names.map((name, i) => {
        let styles = {};
        if (i === 0) styles = { color: "red" };
        return (
          <p key={i} style={styles}>
            {name}
          </p>
        );
      })}
    </div>
  );
};

export default NameList;

