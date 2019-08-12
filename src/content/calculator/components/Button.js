import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

const buttonWidth = 25;
const useStyles = makeStyles(theme => ({
  container: {
    display: "inline-flex",
    width: `${buttonWidth}%`,
    height: `${100/6}vh`,
    flex: "1 0 auto"
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    border: "none",
    fontSize: "1.5rem",
    padding: 0,
    flex: "1 0 auto",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.background.paper
    },

  },
  wide: {
    width: `${2 * buttonWidth}%`
  },
  number: {
    backgroundColor: theme.palette.primary.light,
  }
}));

const Button = ({ name, wide, number, onClick }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.container, wide && classes.wide)}>      
      <button
        className={clsx(
          classes.button,
          number && classes.number,
        )}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
