import React from "react";
import UnstyledLink from "./UnstyledLink";
import SidebarLink from "./SidebarLink";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
  Hidden,
  Drawer,
} from "@material-ui/core";

const drawerWidth = 300;
const breakpoint = "sm";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "stretch",
    minHeight: "100vh",
    width: "100%"
  },
  drawer: {
    [theme.breakpoints.up(breakpoint)]: {
      width: "drawerWidth",
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
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
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  drawerContent: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up(breakpoint)]: {
      marginLeft: drawerWidth,
    }
  },
}));

const Layout = props => {
  const classes = useStyles();
  const { container, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <div className={classes.drawerContent}>
        <List>
          <SidebarLink to="/newtab">New Tab</SidebarLink>
          <SidebarLink to="/ght">Gloomhaven Tracker</SidebarLink>
        </List>
      </div>
    </>
  );

  return (
    <div className={classes.root}>

      {/* Header */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Pages"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" color="inherit">
            <UnstyledLink to={"/"}>Brandt Willems</UnstyledLink>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer (hidden on mobile) */}
      <nav className={classes.drawer} aria-label="Mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
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

      {/* Page content */}
      <main className={classes.content}>
        <div className={classes.drawerHeader} />  
        {children}
      </main>
    </div>
  );
};

export default Layout;
