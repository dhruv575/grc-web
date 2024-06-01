import React from 'react';
import s from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';

import {
    Container,
    Chevron,
    StyledLink,
  } from '../components'
  import {
    POPPINS_BOLD,
    POPPINS_REGULAR,
    POPPINS_SEMI_BOLD,
    MONTSERRAT_REGULAR,
    PLAYFAIR_DISPLAY_SEMI_BOLD,
    PLAYFAIR_DISPLAY_LIGHT,
    PLAYFAIR_DISPLAY_REGULAR,
    LATO_REGULAR,
    LATO_BOLD,
    MONTSERRAT_BOLD,
    MONTSERRAT_SEMI_BOLD,
    PLAYFAIR_DISPLAY_MEDIUM,
    MONTSERRAT_MEDIUM
  } from '../styles/fonts'
  import { WHITE, RED } from '../styles/constants'
  
  const Heroic = s.div`
    text-align: center;
    color: white;
    ${MONTSERRAT_SEMI_BOLD}
    padding-top: 3rem;
    padding-bottom: 1rem;

    background-image: url(${props => props.bgImage});
    background-position: top;

    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);

    height: 47rem;
  `
  
  const HelloWorld = s.h1`
    ${PLAYFAIR_DISPLAY_MEDIUM}
    font-size: 6rem;
    margin-top: -1rem;
  `
  
  const Checkout = s.p`
    ${POPPINS_BOLD}
    color: ${WHITE};
    margin-top: 30rem;
  `

const Heroism = () => {
    const data = useStaticQuery(graphql`
      query {
        heroImage: imageSharp(fluid: { originalName: { eq: "IMG_0774.jpg" } }) {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `);
  
    const heroImage = data.heroImage.fluid.src;
  
    return (
      <Heroic bgImage={heroImage}>
        <HelloWorld> Wharton GRC </HelloWorld>
        <span role="emoji" style={{ fontSize: '3rem', magrinTop: '-2rem' }}>
        INSIGHTS FOR IMPACT
        </span>
        <StyledLink to="/projects">
          <Checkout>
            Check out our projects <Chevron />
          </Checkout>
        </StyledLink>
      </Heroic>
    );
  };
  
  export default Heroism;
  
