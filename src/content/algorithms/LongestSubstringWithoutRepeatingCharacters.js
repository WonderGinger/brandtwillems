import React, { useState } from 'react'
import { TextField, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.h2,
    color: theme.palette.primary.contrastText,
    textAlign: "center",
  }
}))
export const LongestSubStringWithoutRepeatingCharacters = () => {
  const [input, setInput] = useState("abcabcbbdd")
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography>
        {`Using a set/hashmap, iterate through the string with one index tracking starting position, 
        and another tracking end position. Every time a duplicate is found, the length of the previous 
        unique string is updated and the search starts over from the starting position + 1`}
      </Typography>
      <TextField
        id="outlined-bare"
        variant="outlined"
        fullWidth
        onChange={ e => setInput(e.target.value)}
        value={input}
      />
      <Typography variant="h2">
        { lengthOfLongestSubstring(input) }
      </Typography>
    </div>
  )
}

const lengthOfLongestSubstring = (s) => {
  let set = new Set()
  let [l, i, j] = [0,0,0]
  while (i < s.length && j < s.length){
      if (!set.has(s[j])) {
          set.add(s[j++])
          l = Math.max(l, j - i)
      }
      else {
          set.delete(s[i++])
      }
  }
  return l
};