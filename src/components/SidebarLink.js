import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  link: {
    display: "flex",
    minHeight: 64,
    color: "unset",
    textDecoration: "none"
  },
  icon: {
    color: 'theme.palette.primary.contrastText'
  },
  listItemGutters: {
    ...theme.mixins.gutters({
      paddingTop: 12,
      paddingBottom: 12
    }),
  }
}));

const SidebarLink = ({ children, to }) => {
  const classes = useStyles();
  return (
    <Link className={classes.link} to={to}>
      <ListItem button style={{ gutters: classes.listItemGutters }}>
        <ListItemIcon>
          <LinkIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText primary={children} />
      </ListItem>
    </Link>
  );
};

export default SidebarLink;
