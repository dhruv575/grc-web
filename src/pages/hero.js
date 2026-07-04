import React from 'react';
import s from 'styled-components'

import { StyledLink } from '../components'
import {
  POPPINS_BOLD,
  MONTSERRAT_BOLD,
  POPPINS_MEDIUM,
  POPPINS_REGULAR
} from '../styles/fonts'
import { PLUM, PLUM_DEEP, ACCENT, VIOLET_SOFT, WHITE } from '../styles/constants'

const Hero = s.section`
  position: relative;
  background: radial-gradient(ellipse 80% 60% at 50% 0%, ${PLUM} 0%, ${PLUM_DEEP} 70%);
  color: ${WHITE};
  padding: 7rem 5% 5.5rem;
  overflow: hidden;
  text-align: center;

  @media (max-width: 768px) {
    padding: 6rem 6% 3.5rem;
  }
`;

const NetworkSvg = s.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  pointer-events: none;
`;

const HeroInner = s.div`
  position: relative;
  z-index: 2;
  max-width: 760px;
  margin: 0 auto;
`;

const Eyebrow = s.span`
  ${POPPINS_MEDIUM}
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${ACCENT};
  display: block;
  margin-bottom: 1.4rem;
`;

const Headline = s.h1`
  ${MONTSERRAT_BOLD}
  font-size: clamp(2.6rem, 5.5vw, 4.4rem);
  line-height: 1.05;
  margin-bottom: 1.4rem;

  em {
    font-style: italic;
    font-weight: 500;
    color: ${ACCENT};
  }
`;

const Lede = s.p`
  ${POPPINS_REGULAR}
  font-size: 1.08rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.78);
  max-width: 600px;
  margin: 0 auto;
`;

const Stats = s.div`
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  margin-top: 3.5rem;
  flex-wrap: wrap;
`;

const Stat = s.div`
  text-align: center;
`;

const StatNum = s.div`
  ${POPPINS_BOLD}
  font-size: 2.1rem;
  color: ${WHITE};
`;

const StatLabel = s.div`
  ${POPPINS_MEDIUM}
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 0.25rem;
`;

const CTA = s.div`
  display: inline-block;
  margin-top: 2.75rem;
  background-color: ${ACCENT};
  color: ${PLUM_DEEP};
  ${POPPINS_MEDIUM}
  padding: 0.9rem 2.1rem;
  border-radius: 2px;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: transform 0.2s ease;

  :hover {
    transform: translateY(-2px);
  }
`;

const stats = [
  { num: '60+', label: 'Projects Completed' },
  { num: '2016', label: 'Founded' },
  { num: '4', label: 'Schools Represented' }
];

const Heroism = () => (
  <Hero>
    <NetworkSvg viewBox="0 0 1200 600" preserveAspectRatio="none">
      <g stroke={VIOLET_SOFT} strokeWidth="0.6" opacity="0.5">
        <line x1="120" y1="80" x2="340" y2="180" />
        <line x1="340" y1="180" x2="600" y2="90" />
        <line x1="600" y1="90" x2="860" y2="200" />
        <line x1="860" y1="200" x2="1080" y2="70" />
        <line x1="340" y1="180" x2="480" y2="330" />
        <line x1="600" y1="90" x2="720" y2="320" />
        <line x1="720" y1="320" x2="480" y2="330" />
        <line x1="860" y1="200" x2="980" y2="380" />
        <line x1="720" y1="320" x2="980" y2="380" />
        <line x1="120" y1="80" x2="200" y2="300" />
        <line x1="200" y1="300" x2="480" y2="330" />
        <line x1="1080" y1="70" x2="1120" y2="260" />
        <line x1="1120" y1="260" x2="980" y2="380" />
      </g>
      <g fill={ACCENT}>
        <circle cx="120" cy="80" r="3" />
        <circle cx="340" cy="180" r="2.4" />
        <circle cx="600" cy="90" r="3.4" />
        <circle cx="860" cy="200" r="2.4" />
        <circle cx="1080" cy="70" r="3" />
        <circle cx="480" cy="330" r="2.4" />
        <circle cx="720" cy="320" r="3" />
        <circle cx="980" cy="380" r="2.4" />
        <circle cx="200" cy="300" r="2" />
        <circle cx="1120" cy="260" r="2" />
      </g>
    </NetworkSvg>
    <HeroInner>
      <Eyebrow>Global Research &amp; Consulting — Wharton Chapter</Eyebrow>
      <Headline>Student consultants, <em>working across borders.</em></Headline>
      <Lede>
        GRC is an internationally-oriented educational non-profit connecting students to consulting work with real global impact. We've partnered with organizations like UNESCO, the World Bank, Wikipedia, Oxfam, and WWF — and we're always growing our network.
      </Lede>
      <Stats>
        {stats.map(stat => (
          <Stat key={stat.label}>
            <StatNum>{stat.num}</StatNum>
            <StatLabel>{stat.label}</StatLabel>
          </Stat>
        ))}
      </Stats>
      <div>
        <StyledLink to="/projects">
          <CTA>Check out our projects</CTA>
        </StyledLink>
      </div>
    </HeroInner>
  </Hero>
);

export default Heroism;
