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
  TierDivider,
} from '../components';
import { VIOLET, PLUM, PLUM_DEEP, ACCENT, WHITE, PARCHMENT } from '../styles/constants';
import { POPPINS_SEMI_BOLD, POPPINS_MEDIUM, POPPINS_REGULAR, MONTSERRAT_BOLD } from '../styles/fonts';

const SectionTitle = s.h2`
  ${MONTSERRAT_BOLD}
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Eyebrow = s.span`
  ${POPPINS_MEDIUM}
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${VIOLET};
  display: block;
  margin-bottom: 0.6rem;
`;

const ImgWrapper = s.div`
  background-color: ${WHITE};
  border: 1px solid #eae3da;
  border-radius: 4px;
  padding: 1rem;

  @media (max-width: 992px) {
    margin-top: 2rem;
  }
`;

const roles = [
  'Become a Consultant',
  'Become a GBM Member'
];

const StyledRow = s(Row)`
  margin: 4rem 0;
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
  padding: 3rem 9rem;

  @media (max-width: 768px) {
    padding: 2.5rem 1.25rem;
  }
`;

const TimelineList = s.div`
  margin-top: 1.75rem;
`;

const TimelineRow = s.div`
  display: flex;
  gap: 1.5rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid rgba(47, 111, 176, 0.15);

  &:last-child {
    border-bottom: none;
  }
`;

const TimelineDate = s.div`
  ${POPPINS_SEMI_BOLD}
  color: ${VIOLET};
  font-size: 0.9rem;
  min-width: 220px;
`;

const TimelineEvent = s.div`
  ${POPPINS_REGULAR}
  color: #4a4a4a;
  font-size: 0.95rem;
`;

const EquitySection = s.section`
  background: linear-gradient(135deg, ${PLUM_DEEP}, ${PLUM});
  color: ${WHITE};
  padding: 5.5rem 5%;
  text-align: center;
`;

const EquityInner = s.div`
  max-width: 700px;
  margin: 0 auto;
`;

const EquityHeading = s.h2`
  ${MONTSERRAT_BOLD}
  font-size: clamp(1.7rem, 3vw, 2.2rem);
  margin: 1rem 0 1.5rem;
  color: ${WHITE};
`;

const EquityText = s.p`
  ${POPPINS_REGULAR}
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.82);
  text-align: left;
`;

const EquityMark = () => (
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

const timeline = [
  { date: 'August 24', event: 'Student Organization Summit' },
  { date: 'August 25', event: 'First Day of Classes' },
  { date: 'August 28', event: 'Wharton Club Fair (3–6 PM)' },
  { date: 'August 28 – September 18', event: 'Club Information Sessions' },
  { date: 'September 4', event: 'Centralized Application Opens' },
  { date: 'September 18', event: 'Centralized Application Closes' },
  { date: 'September 30', event: 'All acceptances and rejections sent out' },
  { date: 'October 1–4', event: 'Fall Break' },
];

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

      <TierDivider bg={PARCHMENT} />

      <SectionWrapper>
        <Eyebrow>Getting Involved</Eyebrow>
        <SectionTitle> There are two ways to join GRC </SectionTitle>
        <PageDescription>1. Become a Consultant — application required</PageDescription>
        <PageDescription>2. Become a General Body Member — no application required</PageDescription>
      </SectionWrapper>

      <SectionWrapper>
        <Eyebrow>Our Community</Eyebrow>
        <SectionTitle> Who Should Join? </SectionTitle>
        <PageDescription>
        Our members come from all four undergraduate schools, representing a wide array of studies and backgrounds, which is a core part of our identity. Our alumni have pursued careers in consulting, finance, tech, the public sector, NGOs, quantitative finance, and investment banking.
        </PageDescription>
        <PageDescription>
        No prior consulting or business experience is necessary. We provide all the training you need. If you are dedicated to social impact, excel in teamwork, and are eager to learn and grow with GRC, there's a place for you!
        </PageDescription>
      </SectionWrapper>

      <SectionWrapper>
        <Eyebrow>Before You Apply</Eyebrow>
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
         3. Demonstrate your commitment to social impact — GRC works with a variety of clients, but all projects aim to advance our mission of making a difference
        </PageDescription>
      </SectionWrapper>

      <SectionWrapper>
        <Eyebrow>Mark Your Calendar</Eyebrow>
        <SectionTitle>
          Recruitment Timeline
        </SectionTitle>
        <TimelineList>
          {timeline.map(({ date, event }) => (
            <TimelineRow key={date + event}>
              <TimelineDate>{date}</TimelineDate>
              <TimelineEvent>{event}</TimelineEvent>
            </TimelineRow>
          ))}
        </TimelineList>
      </SectionWrapper>

      <SectionWrapper>
        <Eyebrow>Next Steps</Eyebrow>
        <SectionTitle>
          What Happens After You Apply
        </SectionTitle>
        <PageDescription>
        Unfortunately, we are not able to accept all applicants into our limited consulting positions each semester. We strongly recommend attending our weekly sessions as a General Body Member before reapplying in subsequent semesters.
        </PageDescription>
      </SectionWrapper>

      <SectionWrapper>
        <Eyebrow>See Us In Action</Eyebrow>
        <SectionTitle> Learn More about GRC </SectionTitle>
        <PageDescription>
          Check out this video about our work.
        </PageDescription>
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwhartongrc%2Fvideos%2F464074007516410%2F%3Fref%3Dembed_video&show_text=0&width=560"
            width="560"
            height="315"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            title="GRC Video"
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
    <Container title="Apply | ">
      <Recruitment open={recruiting} />
      <EquitySection>
        <EquityInner>
          <EquityMark />
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8FA6BF' }}>Our Commitment</span>
          <EquityHeading>Equal opportunity, at the center of the network.</EquityHeading>
          <EquityText>
            As a Wharton Council-recognized student organization, Wharton GRC adheres to the University of Pennsylvania Policy on Equal Opportunity. All Penn undergraduates are welcome to sign up to participate in Wharton GRC's general body membership (GBM) events and programs.
          </EquityText>
        </EquityInner>
      </EquitySection>
    </Container>
  );
}

export default Apply;
