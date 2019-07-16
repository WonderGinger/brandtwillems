import React, { PureComponent } from 'react'
import { grey, blueGrey } from '@material-ui/core/colors';

class Pokemon extends PureComponent {
  render() {
    const { pokemon } = this.props

    return (
      <div style={styles.card}>
        <button
          type="button"
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
            }.png`})`,
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 10,
            border: 'none',
            backgroundColor: 'transparent',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <p style={styles.name}>{pokemon.name}</p>
      </div>
    )
  }
}


const styles = {
  card: {
    background: blueGrey[800],
    maxWidth: 140,
    position: 'relative',
    zIndex: 20000,
    overflow: 'hidden',
    backgroundColor: '#eee',
    cursor: 'pointer',
  },
  name: {
    background: grey[900],
    color: grey[50],
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 20,
    margin: 0,
    textAlign: 'center',
  },
  sprite: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10
  }
}

export default Pokemon