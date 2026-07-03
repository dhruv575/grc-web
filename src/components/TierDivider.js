import React from 'react';
import s from 'styled-components';
import { PARCHMENT, VIOLET } from '../styles/constants';

const Wrapper = s.div`
  position: relative;
  background-color: ${({ bg = PARCHMENT }) => bg};
  padding: 3rem 5% 0;
  display: flex;
  justify-content: center;
`;

const Svg = s.svg`
  width: 100%;
  max-width: 1100px;
  height: 40px;
`;

export const TierDivider = ({ bg }) => (
  <Wrapper bg={bg} aria-hidden="true">
    <Svg viewBox="0 0 1100 40">
      <line x1="0" y1="20" x2="1100" y2="20" stroke="#D8CBBF" strokeWidth="1" />
      <circle cx="20" cy="20" r="4" fill={VIOLET} />
      <circle cx="1080" cy="20" r="4" fill={VIOLET} />
    </Svg>
  </Wrapper>
);

export default TierDivider;
