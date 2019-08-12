import React from "react";

const Column = ({
  classes,
  column,
  onAdd,
  onMoveLeft,
  onMoveRight,
  canMoveLeft,
  canMoveRight
}) => {
  return (
    <div className={classes.column}>
      <p
        className={classes.name}
        style={{ backgroundColor: column.color }}
      >
        {column.name}
      </p>
      {column.cards.map((card, cardIndex) => (
        <Card
          key={cardIndex}
          classes={classes}
          card={card}
          onMoveLeft={onMoveLeft}
          onMoveRight={onMoveRight}
          canMoveLeft={canMoveLeft}
          canMoveRight={canMoveRight}
        />
      ))}
      <button onClick={onAdd}>
        Add a card
      </button>
    </div>
  );
};

const Card = ({
  classes,
  card,
  onMoveLeft,
  onMoveRight,
  canMoveLeft,
  canMoveRight
}) => {
  return (
    <div className={classes.card}>
      {canMoveLeft && <button onClick={onMoveLeft}>{"<"}</button>}
      {card}
      {canMoveRight && <button onClick={onMoveRight}>{">"}</button>}
    </div>
  );
};

export default Column;
