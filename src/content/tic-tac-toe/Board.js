import React from 'react';
import { Paper, Button } from "@material-ui/core";

const Board = ({ classes, squares, onClick, onReset }) => {
  const renderSquare = i => {
    return <Square classes={classes} value={squares[i]} onClick={() => onClick(i)}/>;
  };

  return (
    <Paper className={classes.board}>
      <div className={classes.row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={classes.row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={classes.row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <Button onClick={onReset} variant="contained" color="primary" fullWidth>Reset</Button>
    </Paper>
  )
}

const Square = ({ classes, value, onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick} className={classes.square}>
      {value}
    </Button>
  );
};

export default Board
