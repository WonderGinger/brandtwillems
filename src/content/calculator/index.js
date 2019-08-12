import React, { useState } from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import calculate from "./logic/calculate";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  calculator: {
    display: "flex",
    flexDirection: "column",
  }
}));

const Calculator = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null
  });

  const handleClick = buttonName => {
    setState(calculate(state, buttonName));
  };

  return (
    <div className={classes.calculator}>
      <Display value={state.next || state.total || "0"} />
      <ButtonPanel onClick={handleClick} />
    </div>
  );
};

export default Calculator;
