import React from "react";
import SidebarLink from "./SidebarLink";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import LinkIcon from "@material-ui/icons/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden, Drawer, List, IconButton } from "@material-ui/core";

const drawerWidth = 300;
const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up(theme.breakpoints.standard)]: {
      width: "drawerWidth",
      flexShrink: 0
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(theme.breakpoints.standard)]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.dark
  },
  drawerContent: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

const links = [
  {
    name: "Home",
    to: "/",
    icon: <HomeIcon />
  },
  {
    name: "Projects",
    to: "/projects",
    icon: <AppsIcon />
  },
  {
    name: "Gloomhaven Tracker",
    to: "/ght",
    icon: <LinkIcon />
  },
  {
    name: "Pokedex",
    to: "/pokedex",
    icon: <LinkIcon />
  }
];

const LinkDrawer = ({ handleDrawerToggle, mobileOpen }) => {
  const classes = useStyles();

  const drawer = (
    <>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List className={classes.drawerContent}>
        {links.map(link => (
          <SidebarLink
            name={link.name}
            to={link.to}
            icon={link.icon}
            key={link.name}
          />
        ))}
      </List>
    </>
  );

  return (
    <nav className={classes.drawer} aria-label="Mailbox folders">
      <Hidden lgUp implementation="css">
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
      <Hidden mdDown implementation="css">
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
  );
};

export default LinkDrawer;
