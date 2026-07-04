import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Col, Row } from 'react-bootstrap';
import { MONTSERRAT_BOLD, POPPINS_REGULAR, POPPINS_MEDIUM } from '../styles/fonts';
import { PLUM_DEEP, PLUM, ACCENT, WHITE } from '../styles/constants';

const RecruitmentRow = styled.div`
  padding: 4.5rem 5%;
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(120deg, ${PLUM_DEEP}, ${PLUM});

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Eyebrow = styled.span`
  ${POPPINS_MEDIUM}
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${ACCENT};
  display: block;
  margin-bottom: 1rem;
`;

const RecruitmentTitle = styled.h2`
  ${MONTSERRAT_BOLD}
  font-size: 2.4rem;
  color: ${WHITE};
  margin-bottom: 1.25rem;
`;

const RecruitmentDescription = styled.p`
  ${POPPINS_REGULAR}
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const ApplyButton = styled.a`
  background-color: ${ACCENT};
  color: ${PLUM_DEEP};
  ${POPPINS_MEDIUM}
  border-radius: 2px;
  padding: 0.9rem 2.1rem;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const LeftColWrapper = styled.div`
  padding-top: 1rem;
  padding-right: 3rem;

  @media (max-width: 992px) {
    margin-bottom: 2rem;
    padding-right: 0;
  }
`;

const ImgWrapper = styled.div`
  padding: 1rem;

  @media (max-width: 992px) {
    padding: 0;
  }
`;

const Recruitment = () => {
  const { imageSharp } = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { eq: "IMG_8002.JPG" } }) {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `);

  return (
    <RecruitmentRow>
      <Row style={{ width: '100%' }}>
        <Col lg={6}>
          <LeftColWrapper>
            <Eyebrow>Join the network</Eyebrow>
            <RecruitmentTitle>We're recruiting</RecruitmentTitle>
            <RecruitmentDescription>
              GRC Wharton is a dynamic, student-run organization with a mission to drive global social impact and empower future leaders. Our teams collaborate to deliver innovative solutions for esteemed clients such as UNESCO, Microsoft, the World Bank, Wikipedia, Oxfam, and WWF. By joining GRC, students gain hands-on experience on real-world projects across key markets like China, Africa, India, and the US, in areas from education to global health to sustainability.
            </RecruitmentDescription>
            <ApplyButton
              href="https://pennclubs.com/club/global-research-and-consulting"
              target="_blank"
            >
              Apply
            </ApplyButton>
          </LeftColWrapper>
        </Col>
        <Col lg={6}>
          <ImgWrapper>
            <Img fluid={imageSharp.fluid} style={{ borderRadius: '4px' }} />
          </ImgWrapper>
        </Col>
      </Row>
    </RecruitmentRow>
  );
};

export default Recruitment;
