import React from "react";
import LinkDrawer from './LinkDrawer';
import Header from './Header'
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 300;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "stretch",
    minHeight: "100vh",
    width: "100%"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    [theme.breakpoints.up(theme.breakpoints.standard)]: {
      marginLeft: drawerWidth,
    }
  }
}));

const Layout = props => {
  const classes = useStyles();
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>

      {/* Header */}
      <Header onClick={handleDrawerToggle} />

      {/* Drawer (hidden on mobile) */}
      <LinkDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />

      {/* Page content */}
      <main className={classes.content}>
        <div className={classes.drawerHeader} />  
        {children}
      </main>
    </div>
  );
};

export default Layout;
