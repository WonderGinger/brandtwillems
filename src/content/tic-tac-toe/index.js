import React, { useState } from "react";
import Board from "./Board";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  board: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    display: "flex"
  },
  square: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 200,
    fontSize: 48,
    color: theme.palette.primary.contrastText
  }
}));
const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const classes = useStyles();

  const handleClick = i => {
    console.log(i);
    let s = squares.slice();
    if (s[i]) return;
    s[i] = xIsNext ? "X" : "O";
    setxIsNext(!xIsNext);
    setSquares(s);
  };

  return (
    <div className={classes.container}>
      <Board onClick={handleClick} classes={classes} squares={squares} />;
    </div>
  );
};

export default TicTacToe;
