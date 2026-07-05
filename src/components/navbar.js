import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import { StyledLink } from './typography';
import { POPPINS_MEDIUM } from '../styles/fonts';
import { PLUM_DEEP, ACCENT } from '../styles/constants';

const LINKS = [
  { name: 'Team', link: '/team' },
  { name: 'Projects', link: '/projects' }
];

const NavBarText = styled(Navbar.Text)`
  color: #FFFFFF !important;
  ${POPPINS_MEDIUM}
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  :hover {
    color: ${ACCENT} !important;
  }
`;

const NavText = ({ link, name }) => (
  <div style={{ marginRight: '1.7rem', display: 'flex', alignItems: 'center' }}>
    <StyledLink to={link}>
      <NavBarText>{name}</NavBarText>
    </StyledLink>
  </div>
);

const ApplyPill = styled.div`
  color: ${PLUM_DEEP};
  background-color: ${ACCENT};
  ${POPPINS_MEDIUM}
  font-weight: 700;
  border-radius: 2px;
  padding: 0.45rem 1.1rem;
  font-size: 0.76rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

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
      backgroundColor: 'rgba(14, 36, 64, 0.96)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.14)',
      fontSize: '0.9rem',
      padding: '0.6rem 1rem'
    }}
  >
    <StyledLink to="/">
      <Navbar.Brand style={{ margin: 0 }}>
        <img src="/logo-rect.png" height="42" alt="Wharton GRC logo" />
      </Navbar.Brand>
    </StyledLink>
    <Navbar.Toggle style={{ border: 'none', filter: 'invert(1)' }} />
    <Navbar.Collapse className="justify-content-end">
      <CollapseWrapper>
        {LINKS.map(link => (
          <NavText key={link.name} {...link} />
        ))}
        <StyledLink to="/apply">
          <ApplyPill>Apply</ApplyPill>
        </StyledLink>
      </CollapseWrapper>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
