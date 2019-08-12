import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Column from "./Column";

const initialState = [
  {
    name: "Ideas",
    items: []
  },
  {
    name: "Backlog",
    items: []
  },
  {
    name: "In progress",
    items: []
  }
];

const Kanban = () => {
  const classes = useStyles();
  const [columns, setColumns] = useState(initialState);
  
  const handleAdd = columnIndex => {
    let cols = columns.slice();
    const value = window.prompt("Add new item");
    if (!value) return;
    cols[columnIndex].items.push(value);
    setColumns(cols);
  }
  const handleMove = (columnIndex, itemIndex, direction) => {
    let cols = columns.slice();
    cols[columnIndex + direction].items.push(cols[columnIndex].items.splice(itemIndex, 1));
    setColumns(cols);
  }
  const handleRemoveItem = (columnIndex, itemIndex) => {
    let cols = columns.slice();
    cols[columnIndex].items.splice(itemIndex, 1);
    setColumns(cols);
  }
  return (
    <div className={classes.board}>
      {columns.map((column, columnIndex) => (
        <Column
          classes={classes}
          column={column}
          columnIndex={columnIndex}
          onMoveLeft={cardIndex => handleMove(columnIndex, cardIndex, -1)}
          onMoveRight={cardIndex => handleMove(columnIndex, cardIndex, 1)}
          onRemoveItem={cardIndex => handleRemoveItem(columnIndex, cardIndex)}
          onAdd={() => handleAdd(columnIndex)}
          key={columnIndex}
        />
      ))}
    </div>
  );
};

export default Kanban;

const useStyles = makeStyles(theme => ({
  board: {
    display: "flex",
    color: theme.palette.primary.contrastText
  },
  column: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    margin: 10,
    textAlign: "center",
  },
  columnName: {
    fontSize: 24,
    padding: 4
  },
  item: {
    wordWrap: "break-word",
    padding: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4
  },
  button: {
    width: 20,
    textTransform: 'none'
  }
}));
