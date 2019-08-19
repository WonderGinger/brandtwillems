import React from "react";

const Column = ({
  classes,
  color,
  column,
  onAddCard,
  canMoveLeft,
  canMoveRight,
  onMoveLeft,
  onMoveRight
}) => {
  return (
    <div className={classes.column}>
      <div
        className={classes.name}
        style={{ color: "white", backgroundColor: color }}
      >
        {column.name}
      </div>
      {column.cards.map((card, cardIndex) => (
        <Card
          card={card}
          canMoveLeft={canMoveLeft}
          canMoveRight={canMoveRight}
          onMoveLeft={() => onMoveLeft(cardIndex)}
          onMoveRight={() => onMoveRight(cardIndex)}
          classes={classes}
          key={cardIndex}
        />
      ))}
      <button onClick={onAddCard}>+ Add a card</button>
    </div>
  );
};

const Card = ({ classes, card, canMoveLeft, canMoveRight, onMoveLeft, onMoveRight }) => {
  return (
    <div className={classes.card}>
      {canMoveLeft && <button onClick={onMoveLeft}>{"<"}</button>}
      {card}
      {canMoveRight && <button onClick={onMoveRight}>{">"}</button>}
    </div>
  );
};

export default Column;
