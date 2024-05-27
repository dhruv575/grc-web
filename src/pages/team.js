import React from 'react';
import s from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'react-bootstrap';
import ContentGrid from '../components/funGrid';
import LetterFromPresident from '../components/Letter';

import { Container, PageTitle, Badge } from '../components';
import { LIGHT_BLUE, WHITE, RED, RED_PERCENT } from '../styles/constants';
import { POPPINS_SEMI_BOLD, POPPINS_LIGHT, POPPINS_BOLD, MONTSERRAT_BOLD, PLAYFAIR_DISPLAY_LIGHT, PLAYFAIR_DISPLAY_MEDIUM } from '../styles/fonts';

const CardWrapper = s.div`
  background-color: #3DB2C1;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  padding: 2rem 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;

  :hover {
    transform: scale(1.02);
  }
  transition: all 0.3s;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
    margin: 1rem 0.5rem;
  }
`;

const CardTitle = s.p`
  font-size: 1.4rem;
  ${POPPINS_BOLD}
  color: #000;
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const CardMajor = s.p`
  font-size: 1rem;
  margin-top: -1rem;
  ${POPPINS_LIGHT}
  color: #000;
`;

const CardTags = s.div`
  margin-top: -1rem;
`;

const CardDescription = s.div`
  ${POPPINS_LIGHT}
  margin-top: 2rem;
  color: #000;
`;

const CardDescriptionBold = s.span`
  ${POPPINS_SEMI_BOLD}
  color: #000;
`;

const MemberImg = s(Img)`
  margin: auto;
  border: 5px solid ${RED};
`;

const Card = ({ name, tags, img, major, projects }) => (
  <CardWrapper>
    <Row>
      <Col md={6}>
        <MemberImg fluid={img?.childImageSharp?.fluid} />
      </Col>
      <Col md={6}>
        <CardTitle>{name}</CardTitle>
        <CardMajor>{major}</CardMajor>
        <CardTags>
          {tags.map(tag => (
            <Badge bgColor={RED_PERCENT(0.66)} key={tag}>{tag}</Badge>
          ))}
        </CardTags>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        {projects && <CardDescription><CardDescriptionBold>Projects:</CardDescriptionBold> {projects}</CardDescription>}
      </Col>
    </Row>
  </CardWrapper>
);

const SectionWrapper = s.div`
  background-color: ${({ idx }) => (idx % 2 === 0 ? '#1e3a8a' : 'white')};
  padding: 4rem 7rem;
  box-shadow: ${({ idx }) => (idx % 2 === 0 ? '0px 10px 20px rgba(0, 0, 0, 0.5)' : '0')};
  color: ${({ idx }) => (idx % 2 === 0 ? 'white' : 'black')};

  @media screen and (max-width: 768px) {
    padding: 4rem 1rem;
    text-align: center;
  }
`;

const Members = ({ members }) => (
  <Row>
    {members.map(member => (
      <Col lg={4} key={member.name}>
        <Card {...member} />
      </Col>
    ))}
  </Row>
);

const TeamTitle = s.h2`
  ${MONTSERRAT_BOLD}
`;

const TeamDescription = s.p`
  ${PLAYFAIR_DISPLAY_LIGHT}
  width: 40%;
  margin-top: 0.9rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PageDescription = s.p`
  ${POPPINS_LIGHT}
  margin-top: 2rem;
  padding: 0 15rem;

  @media screen and (max-width: 992px) {
    padding: 0 10rem;
  }

  @media screen and (max-width: 667px) {
    padding: 0 1rem;
  }
`;

const Teams = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "team.json" } }) {
        edges {
          node {
            childrenTeamJson {
              name
              description
              members {
                name
                tags
                major
                projects
                img {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 1000) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const {
    node: { childrenTeamJson: teams }
  } = data.allFile.edges[0];

  return (
    <Container title="Team | ">
      <div style={{ marginTop: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <PageTitle> Wharton GRC </PageTitle>
          <PageDescription>The Global Research and Consulting (GRC) Group is an internationally-oriented educational non-profit with an expansive network of students from universities all over the world. Our mission is to drive global social impact change and empower students to become responsible future leaders, and we have completed over 60 projects with past clients including UNESCO, World Bank, Wikipedia, Oxfam, WWF, and many more.</PageDescription>
        </div>
        <LetterFromPresident />
        {teams.map((team, idx) => (
          <SectionWrapper idx={idx} key={team.name}>
            <TeamTitle>{team.name}</TeamTitle>
            <TeamDescription>{team.description}</TeamDescription>
            <Members members={team.members} />
          </SectionWrapper>
        ))}
      </div>
    </Container>
  );
};

export default Teams;
