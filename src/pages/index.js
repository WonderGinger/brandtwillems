import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Container from "../components/Container";

const IndexPage = ({ classes }) => {
  useEffect(() => {
    document.title = "Brandt Willems";
  });
  return (
    <Layout>
      <Container paddingTop>
        <Skills />
      </Container>
    </Layout>
  );
};

export default IndexPage;
