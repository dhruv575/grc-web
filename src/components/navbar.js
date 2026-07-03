import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import { StyledLink } from './typography';
import { POPPINS_MEDIUM, POPPINS_BOLD } from '../styles/fonts';
import { PLUM_DEEP, ACCENT, WHITE } from '../styles/constants';

const LINKS = [
  { name: 'Team', link: '/team' },
  { name: 'Projects', link: '/projects' }
];

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${WHITE};
  ${POPPINS_BOLD}
  font-size: 1.05rem;
`;

const NavBarText = styled(Navbar.Text)`
  color: rgba(255, 255, 255, 0.75);
  ${POPPINS_MEDIUM}
  font-size: 0.92rem;
  transition: color 0.2s ease;

  :hover {
    color: ${ACCENT};
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
  border-radius: 2px;
  padding: 0.45rem 1.1rem;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
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

const Mark = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="13" r="12" stroke={ACCENT} strokeWidth="1.4" />
    <circle cx="13" cy="13" r="2" fill={ACCENT} />
    <circle cx="5" cy="9" r="1.6" fill={ACCENT} />
    <circle cx="21" cy="9" r="1.6" fill={ACCENT} />
    <circle cx="9" cy="21" r="1.6" fill={ACCENT} />
    <circle cx="19" cy="19" r="1.6" fill={ACCENT} />
    <line x1="13" y1="13" x2="5" y2="9" stroke={ACCENT} strokeWidth="0.8" />
    <line x1="13" y1="13" x2="21" y2="9" stroke={ACCENT} strokeWidth="0.8" />
    <line x1="13" y1="13" x2="9" y2="21" stroke={ACCENT} strokeWidth="0.8" />
    <line x1="13" y1="13" x2="19" y2="19" stroke={ACCENT} strokeWidth="0.8" />
  </svg>
);

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
        <Brand>
          <Mark />
          Wharton GRC
        </Brand>
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
