import React from 'react';
import styled from 'styled-components';
import DepartmentsGrid from '../components/DepartmentsGrid';
import Recruitment from '../components/Recruitment';
import PartnerScroll from '../components/grcPartners';
import Heroism from './hero';
import { LatestWork, Container } from '../components';
import { POPPINS_SEMI_BOLD } from '../styles/fonts';

const NoPaddingContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
`;

const Title = styled.h2`
  ${POPPINS_SEMI_BOLD}
  color: #87CEEB;
  font-size: 4rem;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

const Index = () => {
  return (
    <Container>
      <Heroism />
      <LatestWork />
      <Recruitment />
      <Title>About GRC</Title>
      <DepartmentsGrid />
      <PartnerScroll />
    </Container>
  );
};

export default Index;
