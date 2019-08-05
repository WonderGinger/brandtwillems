import React from "react";
import { Button } from "@material-ui/core";

const Square = ({ classes, value, onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick} className={classes.square}>
      {value}
    </Button>
  );
};

export default Square;
