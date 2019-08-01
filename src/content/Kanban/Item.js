import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";

const Item = ({
  classes,
  item,
  canMoveLeft,
  canMoveRight,
  onMoveLeft,
  onMoveRight,
  onRemoveItem
}) => {
  return (
    <ButtonGroup fullWidth className={classes.item}>
      {canMoveLeft && (
        <Button className={classes.button} onClick={onMoveLeft}>
          {"<"}
        </Button>
      )}
      <Button onClick={onRemoveItem}>
        {item}
      </Button>
      {canMoveRight && (
        <Button className={classes.button} onClick={onMoveRight} fullWidth>
          {">"}
        </Button>
      )}
    </ButtonGroup>
  );
};

export default Item;
