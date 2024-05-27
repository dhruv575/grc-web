import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { POPPINS_SEMI_BOLD } from '../styles/fonts';

const PartnersContainer = styled.div`
    align-items: center;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 2rem;
    margin-top: 2rem;

    animation: animateBg 20s linear infinite;
    background-color: #3DB2C1;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  
    @media (max-width: 768px) {
      padding: 2rem;
    }
`;

const PartnersScrollContainer = styled.div`
    display: flex;
    overflow-x: auto;
    align-items: center;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  
    @media (max-width: 768px) {
      padding: 2rem;
    }
`;

const PartnerLogo = styled.img`  // Changed from styled(Img) to styled.img since we are not using gatsby-image now
    height: 200px;
    flex-shrink: 0;
    margin-right: 20px;
    scroll-snap-align: start;
`;

const Title = styled.h2`
  ${POPPINS_SEMI_BOLD}
  color: #ffffff;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 2rem;
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
