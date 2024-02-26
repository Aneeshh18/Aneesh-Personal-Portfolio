import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('web app');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Web Applications</Title>
        <Desc>
          Explore highlights from my portfolio of web applications. I've demonstrated my adaptability and expertise
          by taking on and finishing a variety of projects.
        </Desc>
        <CardContainer>
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
