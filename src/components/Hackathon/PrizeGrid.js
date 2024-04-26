import React from 'react';
import styled from 'styled-components';
import { POPPINS_BOLD, MONTSERRAT_LIGHT } from '../../styles/fonts';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; // Single column for the overall container
  gap: 20px; // Space between grid items
  padding: 0rem 2rem;
`;

const PrizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Three columns for the prizes
  gap: 20px;
  text-align: center; // Center text for all items in the prize grid
`;

const PrizeBlock = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  background: #0a3c02; // A dark green background for each prize block
  color: #ffffff; // White text for better contrast
`;

const Title = styled.h2`
  ${POPPINS_BOLD}
  color: #ffffff;
  font-size: 2rem; // Increased size for prominence
  text-align: center; // Center-aligned title
  margin-bottom: 1rem; // Space below the title
`;

const Description = styled.p`
  ${MONTSERRAT_LIGHT}
  font-size: 1rem;
  color: #ffffff; // White text for readability
  margin-bottom: 1.5rem; // Space below the description
`;

// Sample component to display the grid with content
const PrizesGrid = () => {
  return (
    <GridContainer>
      <PrizeGrid>
        <PrizeBlock>
          <Title>First Place</Title>
          <Description>TBD</Description>
        </PrizeBlock>
        <PrizeBlock>
          <Title>Second Place</Title>
          <Description>TBD</Description>
        </PrizeBlock>
        <PrizeBlock>
          <Title>Third Place</Title>
          <Description>TBD</Description>
        </PrizeBlock>
      </PrizeGrid>
    </GridContainer>
  );
};

export default PrizesGrid;
