import React from 'react';
import DepartmentsGrid from '../components/DepartmentsGrid';
import Recruitment from '../components/Recruitment';
import PartnerScroll from '../components/grcPartners';
import Heroism from './hero';
import { LatestWork, Container } from '../components';

const Index = () => {
  return (
    <Container>
      <Heroism />
      <LatestWork />
      <Recruitment />
      <DepartmentsGrid />
      <PartnerScroll />
    </Container>
  );
};

export default Index;
