import React, { useState, useEffect } from "react";
import Pokemon from "./SimplePokemon";
import PokedexSearchBar from "./PokedexSearchBar";
import { makeStyles, Typography } from "@material-ui/core";

// const ids = Array(100).fill(null).map((item, i) => i+1);

const Pokedex = (props) => {
  const classes = useStyles();
  const [pokemonIds, setPokemonIds] = useState([]);
  const [error, setError] = useState(null)
  const [shouldFetch, setShouldFetch] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (shouldFetch) {
      setShouldFetch(false);
      props.getPokemon({ }).then(action => {
        if (action.error) {
          return setError(action.error.message);
        }
      });
      return;
    };

    const { collection } = props;
    if (Object.entries(collection).length === 0) return;
    setPokemonIds(Object.keys(collection));
    setLoading(false);
  }, [props, shouldFetch]);

  const handleInputChange = value => {
    const { collection } = props;
    const keys = Object.keys(collection);
    if (value === '') return setPokemonIds(keys);

    let ids = keys.filter(id => {
      return (
        id.toString().includes(value) ||
        collection[id].name.toLowerCase().includes(value.toLowerCase())
      );
    })
    if (!ids) return
    setPokemonIds(ids);
  };

  return (
    <div>
      <PokedexSearchBar onChange={value => handleInputChange(value)} />
      {error && <p>{error}</p>}
      <div className={classes.gutter} />
      {loading ? <Typography className={classes.message} variant="h5">Loading...</Typography> :
      <ul className={classes.pokedexList}>
        {pokemonIds.map(id => {
          const pokemon = props.collection[id];
          return (
            <li className={classes.pokedexListItem} key={id}>
              <Pokemon pokemon={pokemon} />
            </li>
          );
        })}
      </ul>}
    </div>
  );
};

export default Pokedex;

const useStyles = makeStyles(theme => ({
  gutter: {
    height: "5vh"
  },
  message: {
    color: theme.palette.primary.contrastText,
  },
  pokedexList: {
    listStyle: "none",
    textAlign: "center",
    padding: 0,
    margin: 0
  },
  pokedexListItem: {
    display: "inline-flex",
    margin: 10
  }
}));
