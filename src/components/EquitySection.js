import React from 'react';
import s from 'styled-components';
import { PLUM, PLUM_DEEP, ACCENT, WHITE } from '../styles/constants';
import { POPPINS_MEDIUM, POPPINS_REGULAR, MONTSERRAT_BOLD } from '../styles/fonts';

const Section = s.section`
  background: linear-gradient(135deg, ${PLUM_DEEP}, ${PLUM});
  color: ${WHITE};
  padding: 5.5rem 5%;
  text-align: center;
`;

const Inner = s.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Eyebrow = s.span`
  ${POPPINS_MEDIUM}
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${ACCENT};
  display: block;
  margin-top: 1rem;
`;

const Heading = s.h2`
  ${MONTSERRAT_BOLD}
  font-size: clamp(1.7rem, 3vw, 2.2rem);
  margin: 1rem 0 1.5rem;
  color: ${WHITE};
`;

const Text = s.p`
  ${POPPINS_REGULAR}
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.82);
  text-align: left;
`;

const Mark = () => (
  <svg width="56" height="56" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="27" stroke={ACCENT} strokeWidth="1.3" />
    <circle cx="30" cy="30" r="3" fill={ACCENT} />
    <circle cx="14" cy="18" r="2.2" fill={ACCENT} />
    <circle cx="46" cy="18" r="2.2" fill={ACCENT} />
    <circle cx="12" cy="42" r="2.2" fill={ACCENT} />
    <circle cx="48" cy="42" r="2.2" fill={ACCENT} />
    <circle cx="30" cy="52" r="2.2" fill={ACCENT} />
    <line x1="30" y1="30" x2="14" y2="18" stroke={ACCENT} strokeWidth="0.8" />
    <line x1="30" y1="30" x2="46" y2="18" stroke={ACCENT} strokeWidth="0.8" />
    <line x1="30" y1="30" x2="12" y2="42" stroke={ACCENT} strokeWidth="0.8" />
    <line x1="30" y1="30" x2="48" y2="42" stroke={ACCENT} strokeWidth="0.8" />
    <line x1="30" y1="30" x2="30" y2="52" stroke={ACCENT} strokeWidth="0.8" />
  </svg>
);

export const EquitySection = () => (
  <Section>
    <Inner>
      <Mark />
      <Eyebrow>Our Commitment</Eyebrow>
      <Heading>Equal opportunity, at the center of the network.</Heading>
      <Text>
        As a Wharton Council-recognized student organization, Wharton GRC adheres to the University of Pennsylvania Policy on Equal Opportunity. All Penn undergraduates are welcome to sign up to participate in Wharton GRC's general body membership (GBM) events and programs.
      </Text>
    </Inner>
  </Section>
);

export default EquitySection;
