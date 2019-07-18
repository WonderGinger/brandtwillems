import React from "react";
import { makeStyles, Paper, Button, IconButton } from "@material-ui/core/";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'
import { grey, teal } from "@material-ui/core/colors/";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    background: theme.palette.primary.main,
    color: grey[800],
    "&:hover": {
      background: theme.palette.primary.light,
      color: grey[900],
    }
  },
  icon: {
    width: "128px",
    height: "128px",
    display: "block",
    margin: "auto",
    color: teal[200]
  },
  deleteIcon: {
    position: 'fixed',
    color: theme.palette.primary.main
  }
}));

const Item = ({ href, icon, add, onAdd, onDelete }) => {
  const classes = useStyles();
  if (add) {
    return (
      <Button onClick={onAdd} className={classes.root} fullWidth disableFocusRipple>
        <AddIcon className={classes.icon}/>
      </Button>
    )
  }
  return (
      <Paper className={classes.root}>
        <IconButton aria-label="Delete" className={classes.deleteIcon} onClick={onDelete}>
          <DeleteIcon fontSize="small"/>
        </IconButton>
        <a href={href}>
          <img className={classes.icon} src={icon} alt={href} />
        </a>
      </Paper>
  );
};

export default Item;
