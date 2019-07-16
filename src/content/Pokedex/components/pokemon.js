import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import { grey, blueGrey } from '@material-ui/core/colors';
import '../style/main.css';

const pokemon = ({ pokemon }) => {
  return (
    <Card style={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={140}
          width={140}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        />
      </CardActionArea>
      <CardContent style={styles.name}>
        <Typography variant="caption" >{`${pokemon.name}`}</Typography>
        <Typography variant="caption" >{`#${pokemon.id}`}</Typography>
      </CardContent>
    </Card>
  )
}

const styles = {
  card: {
    background: blueGrey[800],
    maxWidth: 140
  },
  name: {
    background: grey[900],
    color: grey[50],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 0,
    paddingTop: 0
  }
}

export default pokemon
