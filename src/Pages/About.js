import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card"
import Container from "../components/Container";

const About = () => (
  <div>
    <Hero bg="https://www.bypeople.com/wp-content/uploads/2015/07/svg-low-poly-background-css-js-snippet.jpg">
      <h1>Clicky Game!</h1>
      <h2>Click on an image to earn points, but don't click on any more than once!</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Card src="assets/images/beth.png" />
      <Card src="" />
      <Card src="" />
      <Card src="" />
      <Card src="" />
      <Card src="" />
      <Card src="" />
      <Card src="" />
      <Card src="" />
      <Card src="" />
      <Card src="" />
      <Card src="" />
    </Container>
  </div>
);

export default About;
