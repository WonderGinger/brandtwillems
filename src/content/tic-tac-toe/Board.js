import React from 'react';
import Square from "./Square";
import { Paper } from "@material-ui/core";

const Board = ({ classes, squares, onClick }) => {
  const renderSquare = i => {
    console.log(i, squares[i]);
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
    </Paper>
  )
}

export default Board
