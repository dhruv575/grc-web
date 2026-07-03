import React from 'react';
import styled from 'styled-components';
import { MONTSERRAT_BOLD, POPPINS_REGULAR, POPPINS_MEDIUM, POPPINS_SEMI_BOLD } from '../styles/fonts';
import { PLUM, PLUM_DEEP, VIOLET, WHITE, PARCHMENT } from '../styles/constants';

const Wrapper = styled.div`
  background: linear-gradient(120deg, ${PLUM_DEEP}, ${PLUM});
  padding: 4.5rem 5% 5rem;
`;

const Eyebrow = styled.span`
  ${POPPINS_MEDIUM}
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  display: block;
  text-align: center;
  margin-bottom: 0.9rem;
`;

const MainTitle = styled.h2`
  ${MONTSERRAT_BOLD}
  color: ${WHITE};
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 2.75rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StatCard = styled.div`
  background-color: ${WHITE};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.75rem 1rem;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Number = styled.div`
  ${POPPINS_SEMI_BOLD}
  font-size: 2.6rem;
  color: ${VIOLET};
`;

const Title = styled.div`
  ${POPPINS_MEDIUM}
  color: #2c2c2a;
  text-align: center;
  font-size: 0.85rem;
  margin-top: 0.4rem;
`;

const FullWidthCard = styled.div`
  background-color: ${PARCHMENT};
  border-radius: 4px;
  overflow: hidden;
  padding: 1.75rem 2rem;
  grid-column: span 4;
  margin-top: 1.25rem;

  @media (max-width: 768px) {
    grid-column: span 2;
  }
`;

const DescriptionText = styled.p`
  ${POPPINS_REGULAR}
  color: #4a3f52;
  font-size: 1rem;
  line-height: 1.7;
  text-align: center;
`;

const DepartmentsGrid = () => {
  const placeholders = [
    { id: 1, title: 'Active Members', number: '70' },
    { id: 2, title: 'Projects Completed', number: '140' },
    { id: 3, title: 'GRC Alumni', number: '120' },
    { id: 4, title: 'Years of Excellence', number: '9' },
  ];

  return (
    <Wrapper>
      <Eyebrow>By the numbers</Eyebrow>
      <MainTitle>About GRC</MainTitle>
      <GridContainer>
        {placeholders.map((placeholder) => (
          <StatCard key={placeholder.id}>
            <Number>{placeholder.number}</Number>
            <Title>{placeholder.title}</Title>
          </StatCard>
        ))}
        <FullWidthCard>
          <DescriptionText>
            Established in 2016, GRC Wharton embodies remarkable expertise, professionalism, and a steadfast social mission. Through cutting-edge Wharton databases and a diverse pool of talented individuals, we provide comprehensive services to global non-profits and impact-focused organizations, enabling them to tackle challenges and strengthen their operations. Our specialization encompasses key markets like China, Africa, India, and the US, focusing on vital areas such as education, global health, impact investing, development, sustainability, and analytics. In 2019, GRC Wharton expanded its influence as the founding branch of the GRC, swiftly establishing branches at Harvard, Columbia, the LSE, and Northwestern Kellogg within a year. With a track record of over 140 successfully completed projects, including esteemed clients such as UNESCO, Microsoft, World Bank, Wikipedia, Oxfam, and WWF, GRC Wharton remains committed to delivering innovative and impactful solutions across the public, private, and social sectors.
          </DescriptionText>
        </FullWidthCard>
      </GridContainer>
    </Wrapper>
  );
};

export default DepartmentsGrid;
