import React from 'react';
import DepartmentsGrid from '../components/DepartmentsGrid';
import Recruitment from '../components/Recruitment';
import PartnerScroll from '../components/grcPartners';
import Heroism from './hero';
import { LatestWork, Container, TierDivider } from '../components';
import { WHITE, PARCHMENT } from '../styles/constants';

const Index = () => {
  return (
    <Container>
      <Heroism />
      <TierDivider bg={PARCHMENT} />
      <LatestWork />
      <Recruitment />
      <DepartmentsGrid />
      <TierDivider bg={WHITE} />
      <PartnerScroll />
    </Container>
  );
};

export default Index;
