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
  background-image: linear-gradient(30deg, #e0f7fa, #b3e5fc, #81d4fa, #4fc3f7);
  background-size: 400% 400%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);

  @keyframes animateBg {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const RecruitmentTitle = styled.h1`
  ${POPPINS_SEMI_BOLD}
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
`;

const RecruitmentDescription = styled.p`
  ${POPPINS_REGULAR}
  font-size: 1rem;
  color: white;
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
              The Daily Pennsylvanian is a $3-million, student-run media organization. Our incredible teams work together to market our products and sustain our business. Through the DP, students experience working for a real company, with real staffers, clients, and revenues. Join one of our teams to gain an invaluable, hands-on experience unlike any other.
            </RecruitmentDescription>
            <ApplyButton
              href="https://docs.google.com/forms/d/e/1FAIpQLSeduPvGWySAkxCWQwdrvpvSppx2455xjNRh1yi4aCn_lJnQ2Q/viewform"
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
