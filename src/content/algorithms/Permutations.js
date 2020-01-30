import React, { useState } from 'react'
import { TextField, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.subtitle2,
    color: theme.palette.primary.contrastText,
    textAlign: "center",
  },
  link: {
    color: "white"
  }
}))
export const Permutations = () => {
  const [input, setInput] = useState("abc")
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography>
        <a className={classes.link} href="https://en.wikipedia.org/wiki/Heap%27s_algorithm.">Heap's recursive algorithm</a>
        <br/>
        {`Convert string to array to operate, then recursively swap`}
      </Typography>
      <TextField
        id="outlined-bare"
        variant="outlined"
        fullWidth
        onChange={ e => setInput(e.target.value)}
        value={input}
      />
      <Typography variant="h6">
          {findPermutations(input).join(", ")}
      </Typography>
    </div>
  )
}
// https://en.wikipedia.org/wiki/Heap%27s_algorithm
const findPermutations = input => {
  function *permute(a, k = a.length) {
    if (k <= 1) yield a.slice()
    // Generate permutations for kth swapped with each k-1 initial
    else for (let i = 0; i < k; i++) {
      yield *permute(a, k - 1)
      // Even => final character is iteratively swapped with i, odd => final character swapped with 0
      const j = k % 2 ? 0 : i; 
      // Swap indices
      [a[k-1], a[j]] = [a[j], a[k-1]]
    }
  }

   let permutations = Array.from(permute(input.split("")))
   .map(perm => perm.join(''))
   .filter((el, idx, self) => (self.indexOf(el) === idx))
   console.log(permutations)
   return permutations
}

