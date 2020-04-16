import React from 'react';
import Container from 'react-bootstrap/Container';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Badge from 'react-bootstrap/Badge';


function ContactPage(props) {
  return (
    <Container>
      <Hero title={props.title} />

      <Content>
        <h4>Feel free to reach out to me via Text, Call, or Email!</h4>

        <p><Badge variant="dark">Phone:</Badge>(614)483-3484</p>
        <p><Badge variant="dark">Email:</Badge> alextravick18@gmail.com</p>
      </Content>
    </Container>
  )
}

export default ContactPage;
