import React from "react";
import Button from "./Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: "1 0 auto",
    flexWrap: "wrap",
    marginBottom: 0,
  },
  row: {
    width: '100%',
    display: "flex",
    flex: "1 0 auto",
    marginBottom: 0,

  }
}));

const ButtonPanel = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <Button name="AC" onClick={name => onClick(name)} />
        <Button name="+/-" onClick={name => onClick(name)} />
        <Button name="%" onClick={name => onClick(name)} />
        <Button name="/" onClick={name => onClick(name)} />
      </div>
      <div className={classes.row}>
        <Button name="7" onClick={name => onClick(name)} number />
        <Button name="8" onClick={name => onClick(name)} number />
        <Button name="9" onClick={name => onClick(name)} number />
        <Button name="x" onClick={name => onClick(name)} />
      </div>
      <div className={classes.row}>
        <Button name="4" onClick={name => onClick(name)} number />
        <Button name="5" onClick={name => onClick(name)} number />
        <Button name="6" onClick={name => onClick(name)} number />
        <Button name="-" onClick={name => onClick(name)} />
      </div>
      <div className={classes.row}>
        <Button name="1" onClick={name => onClick(name)} number />
        <Button name="2" onClick={name => onClick(name)} number />
        <Button name="3" onClick={name => onClick(name)} number />
        <Button name="+" onClick={name => onClick(name)} />
      </div>
      <div className={classes.row}>
        <Button name="0" onClick={name => onClick(name)} wide number />
        <Button name="." onClick={name => onClick(name)} />
        <Button name="=" onClick={name => onClick(name)} />
      </div>
    </div>
  );
};

export default ButtonPanel;
