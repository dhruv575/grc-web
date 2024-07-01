import React from 'react';
import s from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import {
  Container,
  Badge,
  PageTitle,
  PageDescription,
  Chevron,
  StyledAnchor
} from '../components';
import { BLUE_PERCENT, RED, BLUE, WHITE } from '../styles/constants';
import { POPPINS_BOLD, POPPINS_SEMI_BOLD } from '../styles/fonts';

const Wrapper = s.div`
  background-color: ${BLUE_PERCENT(0.04)};
  padding: 3rem 0;
`;

const SectionTitle = s.h1`
  ${POPPINS_SEMI_BOLD}
  font-size: 2.8rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const IFrameWrapper = s.div`
  margin: auto;
  width: 80%;

  .iframe {
    height: calc(100% - 59px);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ImgWrapper = s.div`
  background-color: ${RED};
  border-radius: 22px;
  padding: 1rem;

  @media (max-width: 992px) {
    margin-top: 2rem;
  }
`;

const roles = [
  'Beome a Consultant',
  'Become a GBM Member'
];

const StyledRow = s(Row)`
  margin: 5rem 0;
  padding-left: 5rem;
  padding-right: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    margin: 2rem 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const SectionWrapper = s.div`
  margin-top: 1rem;
  padding: 2rem 9rem;
  border-top: 4px solid ${BLUE_PERCENT(0.1)};

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ApplyHere = s.span`
  ${POPPINS_BOLD}
  color: ${RED};
  margin-left: 0.3rem;
`;

const Recruitment = ({ open }) => {
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
    <>
      {open ? (
        <StyledRow>
          <Col lg={6}>
            <PageTitle> Joining GRC </PageTitle>
            <PageDescription>
            Global Research and Consulting Group (GRC) is a dynamic, student-run organization dedicated to driving social impact through pro-bono consulting. Our talented teams collaborate to deliver innovative solutions for global non-profits, governmental organizations, and F100 companies. At Wharton GRC, students gain real-world experience by working on impactful projects with esteemed clients like Google, UNESCO, Microsoft, and the World Bank. Join one of our teams to gain invaluable, hands-on consulting experience and make a meaningful difference in the world.            
            </PageDescription>
            {roles.map(role => (
              <Badge key={role}> {role} </Badge>
            ))}
            {/* <StyledAnchor
              href="/apply"
              target="_blank"
            >
              <div style={{ marginTop: '2rem' }}>
                <Chevron bgColor={BLUE} color={WHITE} />{' '}
                <ApplyHere> APPLY HERE </ApplyHere>
              </div>
            </StyledAnchor> */}
          </Col>
          <Col>
            <ImgWrapper>
              <Img fluid={imageSharp.fluid} />
            </ImgWrapper>
          </Col>
        </StyledRow>
      ) : (
        <StyledRow>
          <Col lg={6}>
            <PageTitle> Applications have closed. </PageTitle>
            <PageDescription>
              Please apply next semester!
            </PageDescription>
          </Col>
          <Col>
            <ImgWrapper>
              <Img fluid={imageSharp.fluid} />
            </ImgWrapper>
          </Col>
        </StyledRow>
      )}

      <SectionWrapper>
        <SectionTitle> There are two ways to join GRC: </SectionTitle>
        <PageDescription>1. Become a Consultant - Application Required</PageDescription>
        <PageDescription>2. Become a General Body Member - No Application Required</PageDescription>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle> Who Should Join? </SectionTitle>
        <PageDescription>
        Our members come from all four undergraduate schools, representing a wide array of studies and backgrounds, which is a core part of our identity. Our alumni have pursued careers in consulting, finance, tech, the public sector, NGOs, quantitative finance, and investment banking.
        </PageDescription>
        <PageDescription>
        No prior consulting or business experience is necessary. We provide all the training you need. If you are dedicated to social impact, excel in teamwork, and are eager to learn and grow with GRC, there’s a place for you!
        </PageDescription>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle> GRC Consulting Application Information and Tips </SectionTitle>
        <PageDescription>
        Applicants of all majors and backgrounds are highly encouraged to apply! GRC consultants are represented across all four of Penn's colleges and represent over 30 countries.
        We recommend that applicants consider the following:
        </PageDescription>
        <PageDescription>
         1. Meet the Board! We would love the opportunity to get to know you better at one of our information sessions or a one-on-one coffee chat
        </PageDescription>
        <PageDescription>
         2. Familiarize yourself with common consulting concepts (slide making, research and presentation skills, etc.)
        </PageDescription>
        <PageDescription>
         3. Demonstrate your commitment to social impact - GRC works with a variety of clients, but all projects aim to advance our mission of making a difference
        </PageDescription>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle>
          Application Timeline
        </SectionTitle>
        <PageDescription>
        September 14: PennClubs application deadline
        </PageDescription>
        <PageDescription>
        September 20: Single-round interview for select candidates
        </PageDescription>
        <PageDescription>
        September 22: All candidates are notified of the status of their application
        </PageDescription>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle>
          Next Steps
        </SectionTitle>
        <PageDescription>
        Unfortunately, we are not able to accept all applicants into our limited consulting positions each semester. We strongly recommend attending our weekly sessions as a General Body Member before reapplying in subsequent semesters.
        </PageDescription>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle> Learn More about GRC! </SectionTitle>
        <PageDescription>
          Check out this video about our work.
        </PageDescription>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <iframe 
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwhartongrc%2Fvideos%2F464074007516410%2F%3Fref%3Dembed_video&show_text=0&width=560" 
            width="560" 
            height="315" 
            style={{ border: 'none', overflow: 'hidden' }} 
            scrolling="no" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
            allowFullScreen={true}
          ></iframe>
        </div>
      </SectionWrapper>
    </>
  );
}

const Apply = () => {

  const recruiting = true;

  return (
    <>
      {recruiting ? (
        <Container title="Apply | ">
          <Recruitment open={true}/>
        </Container>
      ) : (
        <Container title="Apply | ">
          <Recruitment open={recruiting}/>
        </Container>
      )}
    </>
  );
}

export default Apply;
