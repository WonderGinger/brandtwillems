import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import homepageMedia from "../content/static/media/homepage.jpg";
import pokedexMedia from "../content/static/media/pokedex.jpg";
import kanbanMedia from "../content/static/media/kanban.jpg";
import tttMedia from "../content/static/media/tictactoe.jpg";
import calcMedia from "../content/static/media/calculator.jpg";
import flavaMedia from "../content/static/media/flava.jpg";
import drunkenMedia from "../content/static/media/drunken_brawl.jpg";

const Projects = props => {
  useEffect(() => {
    document.title = "Projects";
  });
  return (
    <Layout>
      <Container fixed>
        <Grid
          container
          alignItems="flex-start"
          justify="space-evenly"
          spacing={10}
        >
          {projects.map(project => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={project.name}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Projects;

const projects = [
  {
    name: "Homepage",
    description:
      "I made a page that I use as my home page and new tab page, so that I can control exactly what I see and how it works",
    image: homepageMedia,
    to: "/homepage",
    github: "https://github.com/WonderGinger/homepage/"
  },
  {
    name: "Pokedex",
    description:
      "A quick pokedex app that lists every Pokemon, and allows search. I used this project to learn the basics of Redux and implementing text searching algorithms",
    image: pokedexMedia,
    to: "/pokedex",
    github:
      "https://github.com/WonderGinger/brandtwillems/tree/master/src/content/Pokedex"
  },
  {
    name: "Kanban",
    description: "A Kanban app example that I made to practice for interviews.",
    image: kanbanMedia,
    to: "/kanban"
  },
  {
    name: "Tic Tac Toe",
    description: "A Tic Tac Toe game with time travelling capabilities",
    image: tttMedia,
    to: "/tictactoe"
  },
  {
    name: "Calculator",
    description: "A material theme calculator",
    image: calcMedia,
    to: "/calculator"
  },
  {
    name: "Flava",
    description:
      "Using machine learning, me and a team created a model to predict a training plan to help the user achieve running goals",
    image: flavaMedia,
    to: "https://flava.gregbrisebois.com/",
    github: "https://github.com/gregoryjjb/flava-web",
    outside: true
  },
  {
    name: "Drunken Brawl",
    description:
      "I teamed up with an artist and made a local PvP platforming fighting video game over the course of 3 months. This game is hosted in an arcade cabinet on campus at SJSU",
    image: drunkenMedia,
    to: "https://drunkenbrawl.itch.io/drunken-brawl",
    github: "https://github.com/WonderGinger/drunken-brawl",
    outside: true
  }
];
