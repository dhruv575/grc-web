import React from 'react';
import styled from 'styled-components';
import { MONTSERRAT_MEDIUM, PLAYFAIR_DISPLAY_LIGHT, POPPINS_BOLD, MONTSERRAT_REGULAR } from '../styles/fonts';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Creates four columns for wider screens
  gap: 1rem; // Space between grid items
  padding: 0rem 1rem; // Margin around the entire grid
  justify-content: center; // Centers grid items when they do not fill up a row

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Use one column on small screens
  }
`;

const ProjectCard = styled.div`
  background-color: #1e3a8a;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${PLAYFAIR_DISPLAY_LIGHT}
  padding: 0.1rem;
  transition: transform 0.3s ease; // Smooth transition effect

  &:hover {
    transform: scale(1.05); // Slightly enlarge the container on hover
  }
`;

const NumberPlaceholder = styled.div`
  ${POPPINS_BOLD}
  width: 100%;
  height: 200px; // Adjust height as needed
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7rem; // Adjust font size as needed
  color: #ffffff; // Placeholder text color
`;

const Title = styled.h2`
  ${MONTSERRAT_MEDIUM}
  color: #ffffff;
  text-align: center;
  font-size: 2rem;
`;

const FullWidthCard = styled.div`
  background-color: #1e3a8a;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${PLAYFAIR_DISPLAY_LIGHT}
  padding: 1rem;
  grid-column: span 4; // Make the fifth box span all columns

  transition: transform 0.3s ease; // Smooth transition effect

  &:hover {
    transform: scale(1.01); // Slightly enlarge the container on hover
  }

  @media (max-width: 768px) {
    grid-column: span 1; // Span one column on small screens
  }
`;

const DescriptionText = styled.p`
  ${MONTSERRAT_REGULAR}
  color: #ffffff;
  font-size: 1.1rem;
  padding: 1rem;
  text-align: center;
`;

const DepartmentsGrid = () => {
  // Define an array of placeholders
  const placeholders = [
    { id: 1, title: 'Active Members', number: 70 },
    { id: 2, title: 'Projects Completed', number: 140 },
    { id: 3, title: 'GRC Alumni', number: 120 },
    { id: 4, title: 'Years of Excellence', number: 9 },
  ];

  return (
    <GridContainer>
      {placeholders.map((placeholder) => (
        <ProjectCard key={placeholder.id}>
          <NumberPlaceholder>{placeholder.number}</NumberPlaceholder>
          <div style={{ padding: '20px' }}>
            <Title>{placeholder.title}</Title>
          </div>
        </ProjectCard>
      ))}
      <FullWidthCard>
        <DescriptionText>
        Established in 2016, GRC Wharton embodies remarkable expertise, professionalism, and a steadfast social mission. Through cutting-edge Wharton databases and a diverse pool of talented individuals, we provide comprehensive services to global non-profits and impact-focused organizations, enabling them to tackle challenges and strengthen their operations. Our specialization encompasses key markets like China, Africa, India, and the US, focusing on vital areas such as education, global health, impact investing, development, sustainability, and analytics. In 2019, GRC Wharton expanded its influence as the founding branch of the GRC, swiftly establishing branches at Harvard, Columbia, the LSE, and Northwestern Kellogg within a year. With a track record of over 140 successfully completed projects, including esteemed clients such as UNESCO, Microsoft, World Bank, Wikipedia, Oxfam, and WWF, GRC Wharton remains committed to delivering innovative and impactful solutions across the public, private, and social sectors.​
        </DescriptionText>
      </FullWidthCard>
    </GridContainer>
  );
};

export default DepartmentsGrid;
