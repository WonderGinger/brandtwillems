import React, { useState } from "react";
import Item from "./Item";
import { Paper, Input, Button } from "@material-ui/core";

const Column = ({
  classes,
  column,
  columnIndex,
  onMoveLeft,
  onMoveRight,
  onRemoveItem,
  onAdd
}) => {
  const [name, setName] = useState(column.name)
  return (
    <Paper className={classes.column}>
      <Input 
        value={name}
        onChange={e => setName(e.target.value)}
        disableUnderline
        fullWidth
        className={classes.columnName}
      />
      {column.items.map((item, itemIndex) => (
        <Item
          classes={classes}
          item={item}
          canMoveLeft={columnIndex > 0}
          canMoveRight={columnIndex < 2}
          onMoveLeft={() => onMoveLeft(itemIndex)}
          onMoveRight={() => onMoveRight(itemIndex)}
          onRemoveItem={() => onRemoveItem(itemIndex)}
          key={itemIndex}
        />
      ))}
      <Button fullWidth onClick={onAdd}>
        +
      </Button>
    </Paper>
  );
};

export default Column;
