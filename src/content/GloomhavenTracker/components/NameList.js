import React from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    textAlign: "center",
    fontSize: "calc(10px + 2vmin)",
    backgroundColor: theme.palette.primary.main,
  },
  first: {
    color: orange[500]
  }
}));

const Name = ({ name, first }) => {
  const classes = useStyles();
  return (
    <p className={clsx(first && classes.first)}>{name}</p>
  )
};

const NameList = ({ names }) => {
  const classes = useStyles();
  if (!names) return;
  return (
    <div className={classes.container}>
      {names.map((name, i) => {
        return (
          <Name key={i} name={name} first={i === 0}/>
        );
      })}
    </div>
  );
};

export default NameList;
