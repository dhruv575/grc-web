import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MONTSERRAT_BOLD, POPPINS_MEDIUM } from '../styles/fonts';
import { PARCHMENT, VIOLET, WHITE } from '../styles/constants';

const LatestWorkWrapper = styled.div`
  background-color: ${PARCHMENT};
  padding: 4rem 0 3.5rem;
  overflow: hidden;
`;

const Eyebrow = styled.div`
  ${POPPINS_MEDIUM}
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${VIOLET};
  text-align: center;
  margin-bottom: 0.9rem;
`;

const Title = styled.h2`
  ${MONTSERRAT_BOLD}
  color: #1B1420;
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
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
  background-color: ${WHITE};
  border-radius: 8px;
  border: 1px solid #eae3da;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImg = styled(Img)`
  border-radius: 6px;
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
      <Eyebrow>Our clients</Eyebrow>
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
