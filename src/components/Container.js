import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  gutter: {
    maxWidth: 1000,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    boxSizing: "border-box",
    [theme.breakpoints.up(theme.breakpoints.standard)]: {
      paddingLeft: 24,
      paddingRight: 24
    }
  },
  gutterBottom: {
    paddingBottom: 32
  },
  gutterTop: {
    paddingTop: 32
  }
});

const Container = ({
  classes,
  children,
  paddingTop,
  paddingBottom
}) => {
  return (
    <div
      className={clsx(
        classes.gutter,
        paddingTop && classes.gutterTop,
        paddingBottom && classes.gutterBottom
      )}
    >
      {children}
    </div>
  );
};

export default withStyles(styles)(Container);
