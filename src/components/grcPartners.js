import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { MONTSERRAT_BOLD, POPPINS_MEDIUM } from '../styles/fonts';
import { WHITE, VIOLET } from '../styles/constants';

const PartnersContainer = styled.div`
  padding: 4rem 5% 4.5rem;
  background-color: ${WHITE};

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const PartnersScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  align-items: center;
  gap: 2.5rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  max-width: 1100px;
  margin: 0 auto;
`;

const PartnerLogo = styled.img`
  height: 140px;
  flex-shrink: 0;
  scroll-snap-align: start;
  filter: grayscale(20%);
  opacity: 0.85;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 1;
  }
`;

const Eyebrow = styled.div`
  ${POPPINS_MEDIUM}
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${VIOLET};
  text-align: center;
  margin-bottom: 0.9rem;
`;

const Title = styled.h2`
  ${MONTSERRAT_BOLD}
  color: #1B1420;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 2.5rem;
`

const PartnerScroll = () => {
    const data = useStaticQuery(graphql`
        query PartnersData {
            allPartnersJson {
                edges {
                    node {
                        name
                        img {
                            publicURL
                        }
                    }
                }
            }
        }
    `);

    return (
        <PartnersContainer>
            <Eyebrow>Trusted by</Eyebrow>
            <Title>Our Corporate Partners</Title>
            <PartnersScrollContainer>
                {data.allPartnersJson.edges.map(({ node }) => (
                    <div key={node.name}>
                        <PartnerLogo src={node.img.publicURL} alt={node.name} />
                    </div>
                ))}
            </PartnersScrollContainer>
        </PartnersContainer>
    );
};

export default PartnerScroll;
