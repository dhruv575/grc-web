import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { POPPINS_SEMI_BOLD } from '../styles/fonts';

const LatestWorkWrapper = styled.div`
  background-color: #1e3a8a;
  padding: 3rem 0;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h2`
  ${POPPINS_SEMI_BOLD}
  color: #ffffff;
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CarouselTrack = styled.div`
  display: flex;
  animation: scroll 60s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const ProjectContainer = styled.a`
  flex: 0 0 150px;
  margin: 20px 1rem;
  transition: transform 0.3s ease;
  padding: 0.5rem;
  background-color: white;
  border-radius: 15px;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImg = styled(Img)`
  border-radius: 10px;
`;

export const LatestWork = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            name
            link
            img {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allProjectsJson.edges.map(({ node }) => node);
  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects];

  return (
    <LatestWorkWrapper>
      <Title>Our Projects</Title>
      <CarouselContainer>
        <CarouselTrack>
          {duplicatedProjects.map((project, index) => (
            <ProjectContainer 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <StyledImg fixed={project.img.childImageSharp.fixed} alt={project.name} />
            </ProjectContainer>
          ))}
        </CarouselTrack>
      </CarouselContainer>
    </LatestWorkWrapper>
  );
};

export default LatestWork;