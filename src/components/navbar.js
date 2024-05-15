import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import { StyledLink } from './typography';
import { ApplyButtonNav } from './badge';
import { POPPINS_SEMI_BOLD } from '../styles/fonts';

const LINKS = [
  {
    name: 'Team',
    link: '/team'
  },
  {
    name: 'Projects',
    link: '/projects'
  }
];

const NavBarText = styled(Navbar.Text)`
  color: #3DB2C1;
  ${POPPINS_SEMI_BOLD}
`;

const NavText = ({ link, name }) => {
  return (
    <div style={{ marginRight: '1.5rem', display: 'flex', alignItems: 'center' }}>
      <StyledLink to={link}>
        <NavBarText>{name}</NavBarText>
      </StyledLink>
    </div>
  );
};

const CollapseWrapper = styled(Navbar.Collapse)`
  justify-content: flex-end;
  margin: 0.5rem 0;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NavBar = () => (
  <Navbar
    sticky="top"
    expand="lg"
    style={{
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 5px 6px #00000029',
      fontSize: '0.9rem'
    }}
  >
    <StyledLink to="/">
      <Navbar.Brand>
        <img src="/logo-rect.png" height="70" alt="logo" />
      </Navbar.Brand>
    </StyledLink>
    <Navbar.Toggle style={{ border: 'none' }} />
    <Navbar.Collapse className="justify-content-end">
      <CollapseWrapper>
        {LINKS.map(link => (
          <NavText key={link.name} {...link} />
        ))}
        <StyledLink to="/apply">
          <ApplyButtonNav>Apply</ApplyButtonNav>
        </StyledLink>
      </CollapseWrapper>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
