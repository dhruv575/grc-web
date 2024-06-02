import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Col, Row } from 'react-bootstrap';
import { POPPINS_SEMI_BOLD, POPPINS_REGULAR } from '../styles/fonts';

const RecruitmentRow = styled.div`
  padding: 3rem 5rem;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  animation: animateBg 20s linear infinite;
  background-color: #87CEEB;
  background-size: 400% 400%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const RecruitmentTitle = styled.h1`
  ${POPPINS_SEMI_BOLD}
  font-size: 3rem;
  color: black;
  margin-bottom: 1.5rem;
`;

const RecruitmentDescription = styled.p`
  ${POPPINS_REGULAR}
  font-size: 1rem;
  color: black;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const ApplyButton = styled.a`
  background-color: black;
  ${POPPINS_REGULAR}
  border-radius: 5px;
  padding: 1rem 3rem;
  color: white;
  text-align: center;
  display: inline-block;
  text-decoration: none;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const LeftColWrapper = styled.div`
  padding-top: 4rem;
  padding-right: 5rem;

  @media (max-width: 992px) {
    margin-bottom: 2rem;
    padding-right: 0;
  }
`;

const ImgWrapper = styled.div`
  padding: 2rem;

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
      <Row>
        <Col lg={6}>
          <LeftColWrapper>
            <RecruitmentTitle> We're Recruiting! </RecruitmentTitle>
            <RecruitmentDescription>
                The Global Research and Consulting (GRC) Group at Wharton is a dynamic, student-run organization with a mission to drive global social impact and empower future leaders. Our talented teams collaborate to deliver innovative solutions for esteemed clients such as UNESCO, Microsoft, World Bank, Wikipedia, Oxfam, and WWF. By joining GRC Wharton, students gain invaluable, hands-on experience working on real-world projects across key markets like China, Africa, India, and the US. Our focus areas include education, global health, impact investing, development, sustainability, and analytics. Become a part of GRC Wharton to enhance your professional skills and make a meaningful impact on a global scale.
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
            <Img fluid={imageSharp.fluid} style={{ borderRadius: '10px' }} />
          </ImgWrapper>
        </Col>
      </Row>
    </RecruitmentRow>
  );
};

export default Recruitment;
