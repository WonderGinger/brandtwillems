import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import UnstyledLink from './UnstyledLink';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: {
    background: theme.palette.primary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
}));

const Header = ({ onClick }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar  className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="Pages"
          edge="start"
          onClick={onClick}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" color="inherit">
          <UnstyledLink to={"/"}>Brandt Willems</UnstyledLink>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
