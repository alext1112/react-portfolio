import React from 'react';
import Container from 'react-bootstrap/Container';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
  return (
    <Container>
      <Hero title={props.title} />

      <Content>
        <p>Hey! My name is Alex Travick and I am a full-stack software developer with a focus on the MERN stack.</p>

        <p>My primary goal is to be a tech-oriented content creator, and eventually have enough knowledge and skill to teach others. </p>

        <p>My most recent published project, Tech-bar, is an online database of cocktails introducing new recipes to visitors.</p>

        <p>In my spare time, I enjoy reading and learning new trends in technology, playing video games, and watching or playing basketball with friends.</p> 
      </Content>
    </Container>
  );
}

export default AboutPage;
