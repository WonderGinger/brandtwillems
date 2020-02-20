import React, { useState } from "react";
import { TextField, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.h2,
    color: theme.palette.primary.contrastText,
    textAlign: "center"
  }
}));
export const ReverseString = () => {
  const [input, setInput] = useState("abc");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>
        {`Recursive solution that returns the last character followed by the reversed middle ${input.length -
          2} character(s) followed by the first character`}
      </Typography>
      <TextField
        id="outlined-bare"
        variant="outlined"
        fullWidth
        onChange={e => setInput(e.target.value)}
        value={input}
      />
      <Typography variant="h2">{reverseString(input)}</Typography>
    </div>
  );
};

const reverseString = input => {
  if (!input) return "";
  if (input.length === 1) return input;
  if (input.length === 2) return input[1] + input[0];
  return (
    input[input.length - 1] +
    reverseString(input.slice(1, input.length - 1)) +
    input[0]
  );
};
// eslint-disable-next-line
const reverseString2 = input => {
  return input
    .split("")
    .reverse()
    .join("");
};
