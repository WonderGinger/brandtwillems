import React, { useState } from "react";
import { TextField, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.h2,
    color: theme.palette.primary.contrastText,
    textAlign: "center"
  }
}));
export const LongestPalindrome = () => {
  const [input, setInput] = useState("racecar, a man, a plan, a canal, panama");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>
        {`Using a set/hashmap, iterate through the string with one index tracking starting position, 
        and another tracking end position. Every time a duplicate is found, the length of the previous 
        unique string is updated and the search starts over from the starting position + 1`}
      </Typography>
      <TextField
        id="outlined-bare"
        variant="outlined"
        fullWidth
        onChange={e => setInput(e.target.value)}
        value={input}
      />
      <Typography variant="h2">{longestPalindrome(input)}</Typography>
    </div>
  );
};

const longestPalindrome = s => {
  if (!s) return "";
  s = s.toLowerCase().replace(/[\W_]+/g, "");

  let start = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let len = Math.max(
      expandAroundCenter(s, i, i),
      expandAroundCenter(s, i, i + 1)
    );
    if (len > max) {
      max = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  return s.substr(start, max);
};

const expandAroundCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    left--;
    right++;
  }
  return right - left - 1;
};
