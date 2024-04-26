import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const PartnersContainer = styled.div`
    display: flex;
    overflow-x: auto;
    align-items: center;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    margin: 2rem;
`;

const PartnerLogo = styled.img`  // Changed from styled(Img) to styled.img since we are not using gatsby-image now
    height: 200px;
    flex-shrink: 0;
    margin-right: 20px;
    scroll-snap-align: start;
`;

const PartnersRow = () => {
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
            {data.allPartnersJson.edges.map(({ node }) => (
                <div key={node.name}>
                    <PartnerLogo src={node.img.publicURL} alt={node.name} />
                </div>
            ))}
        </PartnersContainer>
    );
};

export default PartnersRow;
