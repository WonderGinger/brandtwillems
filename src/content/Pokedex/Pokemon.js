import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles
} from "@material-ui/core";

const Pokemon = ({ pokemon }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={140}
          width={140}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.id
          }.png`}
        />
      </CardActionArea>
      <CardContent className={classes.footer} style={{paddingBottom: 0}}>
        <Typography variant="caption">{`${pokemon.name}`}</Typography>
        <Typography variant="caption">{`#${pokemon.id}`}</Typography>
      </CardContent>
    </Card>
  );
};

export default Pokemon;

const useStyles = makeStyles(theme => ({
  card: {
    background: theme.palette.primary.main,
    maxWidth: 140
  },
  footer: {
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 0,
    paddingTop: 0,
  }
}));