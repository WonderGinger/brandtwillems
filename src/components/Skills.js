import React from "react";
import {
  makeStyles,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography
} from "@material-ui/core";
import { skills } from "../content/skills";
import Container from "./Container";

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">Skills</Typography>
      <Divider />
      {skills.map(group => (
        <Group classes={classes} name={group.group} skills={group.skills} />
      ))}
    </div>
  );
};

export default Skills;

const Group = ({ classes, name, skills }) => {
  const handleClick = to => {
    if (!to) return;
    window.location.href = to;
  };
  return (
    <Container paddingTop>
      <Typography variant="h6">{name}</Typography>
      <List className={classes.list}>
        {skills.map(skill => (
          <ListItem
            button={!!skill.to}
            onClick={() => handleClick(skill.to)}
            className={classes.skill}
          >
            <ListItemAvatar>
              <Avatar alt={skill.name} src={skill.icon}/>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h6">{skill.name}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    color: theme.palette.primary.contrastText,
    padding: 15
  },
  list: {
    display: "flex",
    flexWrap: "wrap"
  },
  skill: {
    display: "flex",
    alignItems: "center",
    maxWidth: 240,
    padding: 16
  },
}));
