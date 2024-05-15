import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import {
  POPPINS_SEMI_BOLD,
  PLAYFAIR_DISPLAY_MEDIUM,
  MONTSERRAT_REGULAR,
  POPPINS_LIGHT
} from '../styles/fonts';

const LatestWorkWrapper = styled.div`
  padding: 0rem 4rem;
  margin-bottom: 0rem;
  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

const Title = styled.h2`
  ${POPPINS_SEMI_BOLD}
  color: #3DB2C1;
  text-align: center;
  font-size: 4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: calc(2 * (12rem + 2rem)); /* 2 pairs with margin */
  overflow-y: auto;

  /* Custom scroll bar styles for Webkit browsers */
  &::-webkit-scrollbar {
    width: 12px;
    margin: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3DB2C1;
    border-radius: 10px;
    border: 3px solid #f1f1f1;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #1a6b74;
  }

  /* Custom scroll bar styles for Firefox */
  scrollbar-width: thin;
  scrollbar-color: #3DB2C1 #f1f1f1;
`;

const ProjectPair = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-right: 1rem;
  margin-left: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectContainer = styled.div`
  flex: 1;
  display: flex;
  background-color: #1e3a8a;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  margin: 1rem 0;
  color: #ffffff;
  align-items: center;
  
  transition: transform 0.3s ease; // Smooth transition effect

  &:hover {
    transform: scale(1.03); // Slightly enlarge the container on hover
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 150px;
  margin-right: 1.5rem;
  img {
    border-radius: 10px;
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectName = styled.h2`
  ${POPPINS_LIGHT}
  margin-top: 0;
  fint-size: 1rem;
  color: #ffffff;
`;

const ProjectDescription = styled.p`
  ${POPPINS_LIGHT}
  font-size: 0.9rem;
  color: #d3d3d3;
`;

export const LatestWork = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            name
            description
            img {
              childImageSharp {
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link
          }
        }
      }
    }
  `);

  const projectPairs = [];
  for (let i = 0; i < data.allProjectsJson.edges.length; i += 2) {
    projectPairs.push(data.allProjectsJson.edges.slice(i, i + 2));
  }

  return (
    <LatestWorkWrapper>
      <Title>Our Projects</Title>
      <ProjectsContainer>
        {projectPairs.map((pair, index) => (
          <ProjectPair key={index}>
            {pair.map(({ node }, subIndex) => (
              <ProjectContainer key={subIndex}>
                <ImageContainer>
                  <Img fluid={node.img.childImageSharp.fluid} />
                </ImageContainer>
                <ProjectInfo>
                  <ProjectName>{node.name}</ProjectName>
                  <ProjectDescription>{node.description}</ProjectDescription>
                </ProjectInfo>
              </ProjectContainer>
            ))}
          </ProjectPair>
        ))}
      </ProjectsContainer>
    </LatestWorkWrapper>
  );
};
