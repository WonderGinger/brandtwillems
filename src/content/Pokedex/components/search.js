import React from 'react';
import { Input, Paper } from '@material-ui/core';

const search = ({ value, onChange }) => {
  return (
    <Paper style={styles.root}>
      <div style={styles.container}>
        <Input
          style={styles.input}
          value={value}
          onChange={onChange}
          placeholder="Search"
          fullWidth
          autoFocus
          disableUnderline
        />
      </div>
    </Paper>
  )
}

export default search

const styles = {
  root: {
    height: 48,
    margin: "0 auto",
    maxWidth: 800,
    display: 'flex',
    justifyContent: 'space-between'
  },
  container: {
    margin: 'auto 16px',
    width: 'calc(100% - 32px)' // 48px icon - 32px margin
  },
  input: {
    width: '100%',
  }
}
