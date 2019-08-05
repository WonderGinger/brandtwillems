import React, { useState } from "react";
import Board from "./Board";
import { Button, makeStyles } from "@material-ui/core";

const TicTacToe = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepCount, setStepCount] = useState(0);
  const classes = useStyles();

  const handleClick = i => {
    let squares = history[stepCount].squares.slice();
    if (squares[i] || checkWinner(squares)) return;
    
    squares[i] = stepCount % 2 === 0 ? "X" : "O";
    const prev = (stepCount < history.length - 1) ? history.slice(0, stepCount + 1) : history; 
    setHistory([...prev, { squares }]);
    setStepCount(stepCount + 1);
  };

  const handleReset = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepCount(0);
  };

  return (
    <div className={classes.container}>
      <Board
        onClick={handleClick}
        onReset={handleReset}
        classes={classes}
        squares={history[stepCount].squares}
      />
      <GameInfoPanel history={history} onClick={i => setStepCount(i)} />
    </div>
  );
};

const GameInfoPanel = ({ history, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.gameInfo}>
      {history.map((squares, i) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onClick(i)}
          className={classes.button}
          key={i}
        >
          Turn {i}
        </Button>
      ))}
    </div>
  );
};

const checkWinner = squares => {
  const winCons = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let con of winCons) {
    let [a, b, c] = con;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true;
    }
  }
  return false;
};

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  board: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 5
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
  },
  gameInfo: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: 5
  }
}));

export default TicTacToe;
