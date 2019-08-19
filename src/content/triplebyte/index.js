import React, { useState, useEffect } from "react";
import Column from "./Column";
import { makeStyles } from "@material-ui/core";
import Cookies from "js-cookie";

const initialState = [
  {
    cards: ["Card A", "Card E"],
    name: "Winnie"
  },
  {
    cards: ["Card B", "Card F"],
    name: "Bob"
  },
  {
    cards: ["Card C", "Card G"],
    name: "Thomas"
  },
  {
    cards: ["Card D", "Card H"],
    name: "George"
  }
];
const TripleByte = () => {
  const classes = useStyles();
  const [columns, setColumns] = useState(initialState);

  useEffect(() => {
    let cols = getBookmarkCookie();
    if(!cols) return;
    setColumns(cols);
  }, [])

  const handleAddCard = columnIndex => {
    const value = window.prompt("Enter new card");
    if (!value) return;

    let cols = columns.slice();
    cols[columnIndex].cards.push(value);
    setColumns(cols);
    setBookmarkCookie(cols);
  };

  const handleMove = (columnIndex, cardIndex, direction) => {
    let cols = columns.slice();
    cols[columnIndex + direction].cards.push(cols[columnIndex].cards.splice(cardIndex));
    setColumns(cols);
    setBookmarkCookie(cols);
  }

  return (
    <div className={classes.container}>
      <Column
        classes={classes}
        column={columns[0]}
        canMoveRight
        onAddCard={() => handleAddCard(0)}
        onMoveLeft={cardIndex => handleMove(0, cardIndex, -1)}
        onMoveRight={cardIndex => handleMove(0, cardIndex, 1)}
        color="#8E6E95"
      />
      <Column
        classes={classes}
        column={columns[1]}
        canMoveLeft
        canMoveRight
        onAddCard={() => handleAddCard(1)}
        onMoveLeft={cardIndex => handleMove(1, cardIndex, -1)}
        onMoveRight={cardIndex => handleMove(1, cardIndex, 1)}
        color="#38A58C"
      />
      <Column
        classes={classes}
        column={columns[2]}
        canMoveLeft
        canMoveRight
        onAddCard={() => handleAddCard(2)}
        onMoveLeft={cardIndex => handleMove(2, cardIndex, -1)}
        onMoveRight={cardIndex => handleMove(2, cardIndex, 1)}
        color="#344759"
      />
      <Column
        classes={classes}
        column={columns[3]}
        canMoveLeft
        onAddCard={() => handleAddCard(3)}
        onMoveLeft={cardIndex => handleMove(3, cardIndex, -1)}
        onMoveRight={cardIndex => handleMove(3, cardIndex, 1)}
        color="#E8741E"
      />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    margin: 12.5
  },
  column: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 12.5,
    width: "100%"
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 14
  },
  name: {
    width: "100%",
    height: 30,
    textAlign: "center"
  },
  purple: {
    backgroundColor: "#8E6E95"
  }
}));

const setBookmarkCookie = items => {
  Cookies.set("columns", items.map(item => JSON.stringify(item)).toString(), {
    expires: 365,
    path: ""
  });
};

const getBookmarkCookie = () => {
  let columns = Cookies.get("columns");
  if (!columns || !(columns.length > 0)) return;
  return columns.split(/,(?={)/).map(item => JSON.parse(item));
};


export default TripleByte;
