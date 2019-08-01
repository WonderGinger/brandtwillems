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
    background: theme.palette.header.default,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(theme.breakpoints.standard)]: {
      display: "none"
    }
  },
  title: {
    flex: 1,
    fontWeight: "bold"
  }
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
        <Typography variant="h5" className={classes.title}>
          <UnstyledLink to={"/"}>Brandt Willems</UnstyledLink>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
