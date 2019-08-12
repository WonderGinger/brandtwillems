import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core";
import UnstyledLink from "./UnstyledLink";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    minWidth: 300
  },
  media: {
    height: 160
  },
  button: {
    color: theme.palette.secondary.light
  }
}));

const ProjectCard = props => {
  const classes = useStyles();
  const { project } = props;
  return (
    <Card className={classes.card} key={project.name}>
      <CardActionArea>
        <UnstyledLink to={project.to}>
          <CardMedia
            className={classes.media}
            image={project.image}
            title="Homepage"
          />
          <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {project.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {project.description}
              </Typography>
          </CardContent>
        </UnstyledLink>
      </CardActionArea>
      <CardActions>
        <Button className={classes.button} size="small" color="secondary">
          <UnstyledLink to={project.to}>Demo</UnstyledLink>
        </Button>
        <Button
          className={classes.button}
          href={project.github}
          disabled={!project.github}
          size="small"
          color="secondary"
        >
          Github
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
