import React from "react";
import SidebarLink from "./SidebarLink";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from "@material-ui/core/styles";
import {
  Hidden,
  Drawer,
  List,
  IconButton
} from "@material-ui/core";

const drawerWidth = 300;
const breakpoint = "sm";
const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up(breakpoint)]: {
      width: "drawerWidth",
      flexShrink: 0
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(breakpoint)]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContent: {
    display: "flex",
    flexDirection: "column",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
}));

const LinkDrawer = ({ handleDrawerToggle, mobileOpen }) => {
  const classes = useStyles();

  const drawer = (
    <>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <div className={classes.drawerContent}>
        <List>
          <SidebarLink to="/homepage">Homepage</SidebarLink>
          <SidebarLink to="/ght">Gloomhaven Tracker</SidebarLink>
          <SidebarLink to="/pokedex">Pokedex</SidebarLink>
        </List>
      </div>
    </>
  );
  return (
    <nav className={classes.drawer} aria-label="Mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default LinkDrawer
