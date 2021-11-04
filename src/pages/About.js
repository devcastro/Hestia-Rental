import React from "react";
import styled from "styled-components";
//import { Link } from 'react-router-dom'

const Container = styled.div`
  background: black;
  height: 100vh;
  width: 100%;
`;
const RightContainer = styled.div``;
const LeftContainer = styled.div``;

const About = () => {
  return (
    <Container>
      <RightContainer></RightContainer>
      <LeftContainer></LeftContainer>
    </Container>
  );
};

export default About;
