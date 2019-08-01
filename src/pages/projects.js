import React from "react";
import { Container, Grid } from "@material-ui/core";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import homepageMedia from "../content/static/homepage.jpg";
import gloomhavenMedia from "../content/static/ght.jpg";
import pokedexMedia from "../content/static/pokedex.jpg";
import kanbanMedia from "../content/static/kanban.jpg";

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
      "A quick pokedex app that lists every Pokemon, and allows search. I used this project to learn the basics of Redux and implement a working and beautiful Pokedex app",
    image: pokedexMedia,
    to: "/pokedex",
    github:
      "https://github.com/WonderGinger/brandtwillems/tree/master/src/content/Pokedex"
  },
  {
    name: "Gloomhaven Tracker",
    description:
      "I play the board game Gloomhaven with a group of 5 friends. During the campaign, only 4 players can go on each adventure, so I made an app to automate the process of deciding who's sitting the next one out",
    image: gloomhavenMedia,
    to: "/ght",
  },
  {
    name: "Kanban",
    description: 
      "A Kanban app example that I made to practice for interviews.",
    image: kanbanMedia,
    to: "/kanban",
  }
];

const Projects = props => {
  return (
    <Layout>
      <Container fixed >
        <Grid container alignItems="flex-start" justify="space-evenly" spacing={10}>
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
