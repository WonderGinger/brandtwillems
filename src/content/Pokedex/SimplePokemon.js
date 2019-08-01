import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";

const SimplePokemon = ({ pokemon }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.card}>
      <button
        type="button"
        className={classes.sprite}
        style={{
          backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.id
          }.png`})`
        }}
      />
      <div className={classes.footer}>
        <Typography variant="caption">{`${pokemon.name}`}</Typography>
        <Typography variant="caption">{`#${pokemon.id}`}</Typography>
      </div>
    </Paper>
  );
};

export default SimplePokemon;

const useStyles = makeStyles(theme => ({
  card: {
    background: theme.palette.primary.main,
    maxWidth: 140
  },
  sprite: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
    border: "none",
    backgroundColor: "transparent",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    width: 140,
    height: 140
  },
  footer: {
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
    paddingTop: 0
  }
}));
