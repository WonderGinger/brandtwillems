import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  link: {
    display: "flex",
    minHeight: 64,
    color: "unset",
    textDecoration: "none"
  },
  icon: {
    margin: "0 8px"
  },
  listItemGutters: {
    ...theme.mixins.gutters({
      paddingTop: 12,
      paddingBottom: 12
    })
  }
});

const SidebarLink = ({ children, classes, to }) => (
  <Link className={classes.link} to={to}>
    <ListItem button style={{ gutters: classes.listItemGutters }}>
      <ListItemIcon>
        <LinkIcon/>
      </ListItemIcon>
      <ListItemText primary={children}/>
    </ListItem>
  </Link>
);

export default withStyles(styles)(SidebarLink);
