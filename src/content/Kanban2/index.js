import React, { useState } from "react";
import Column from "./Column";
import { makeStyles } from "@material-ui/core";

const Kanban = () => {
  const classes = useStyles();
  const [columns, setColumns] = useState(initialState);

  const handleAddCard = columnIndex => {
    const value = window.prompt("Enter card to add");
    if (!value) return;
    let cols = columns.slice();
    cols[columnIndex].cards.push(value);
    setColumns(cols);
  };

  const handleMove = (columnIndex, cardIndex, direction) => {
    let cols = columns.slice();
    cols[columnIndex + direction].cards.push(cols[columnIndex].cards.splice(cardIndex, 1));
    setColumns(cols);
  } 
  return (
    <div className={classes.container}>
      {columns.map((column, columnIndex) => (
        <Column
          key={columnIndex}
          onAdd={() => handleAddCard(columnIndex)}
          classes={classes}
          column={column}
          onMoveLeft={cardIndex => handleMove(columnIndex, cardIndex, -1)}
          onMoveRight={cardIndex => handleMove(columnIndex, cardIndex, 1)}
          canMoveLeft={columnIndex > 0}
          canMoveRight={columnIndex < 3}
        />
      ))}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    backgroundColor: "white"
  },
  column: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    padding: 8,
    margin: 8
  },
  name: {
    textAlign: "center",
    fontSize: 24,
    color: 'white',

  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4
  }
}));

const initialState = [
  {
    name: "Winnie",
    cards: ["Card A"],
    color: "purple",
  },
  {
    name: "Bob",
    cards: ["Card B"],
    color: "teal",
  },
  {
    name: "Thomas",
    cards: ["Card C"],
    color: "blue"
  },
  {
    name: "George",
    cards: ["Card D"],
    color: "orange"
  }
];
export default Kanban;
