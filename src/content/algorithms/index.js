import React, { useEffect, useState } from "react";
import {
  makeStyles,
  List,
  ListItem,
  Divider,
  Drawer,
  ListItemText
} from "@material-ui/core";
import { ReverseString } from "./ReverseString";
import { Permutations } from "./Permutations";
import { LongestSubStringWithoutRepeatingCharacters } from "./LongestSubstringWithoutRepeatingCharacters";
import { LongestPalindrome } from "./LongestPalindrome";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

const Algorithms = props => {
  useEffect(() => {
    document.title = "Algorithms";
  });
  const initialIndex = localStorage.getItem("algIndex")
    ? localStorage.getItem("algIndex")
    : 0;
  const [index, setIndex] = useState(initialIndex);
  const classes = useStyles();

  const handleClick = index => {
    setIndex(index);
    localStorage.setItem("algIndex", index);
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {algorithms[index].content}
      </div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {algorithms.map((alg, algIndex) => (
            <ListItem
              button
              key={alg.name}
              onClick={() => handleClick(algIndex)}
            >
              <ListItemText primary={alg.name} secondary={alg.description} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
const algorithms = [
  {
    name: "Reverse string",
    description: `ex: "abc" => "cba"`,
    content: <ReverseString />
  },
  {
    name: "All permutations of string",
    description: `Given a string, find all possible permutations`,
    content: <Permutations />
  },
  {
    name: "Longest substring without repeating characters",
    description: `ex: "ab" => 2, "abcabcbb" => 3`,
    content: <LongestSubStringWithoutRepeatingCharacters />
  },
  {
    name: "Longest palindrome",
    description: `ex: "abracecarcd" => "racecar"`,
    content: <LongestPalindrome />
  }
];
export default Algorithms;
