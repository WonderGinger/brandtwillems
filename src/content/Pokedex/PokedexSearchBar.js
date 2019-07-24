import React, { useState } from "react";
import { Input, Paper, makeStyles } from "@material-ui/core";

const Search = ({ onChange }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  }
  return (
    <Paper className={classes.root}>
      <div className={classes.container}>
        <Input
          className={classes.input}
          value={value}
          onChange={handleChange}
          placeholder="Search"
          fullWidth
          autoFocus
          disableUnderline
        />
      </div>
    </Paper>
  );
};

export default Search;

const useStyles = makeStyles(theme => ({
  root: {
    height: 48,
    margin: "0 auto",
    maxWidth: 800,
    display: "flex",
    justifyContent: "space-between"
  },
  container: {
    margin: "auto 16px",
    width: "calc(100% - 32px)" // 48px icon - 32px margin
  },
  input: {
    width: "100%"
  }
}));
