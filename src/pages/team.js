import React from 'react';
import s from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'react-bootstrap';

import { Container, PageTitle, TierDivider } from '../components';
import { VIOLET, PARCHMENT, WHITE } from '../styles/constants';
import { POPPINS_SEMI_BOLD, POPPINS_REGULAR, POPPINS_LIGHT, POPPINS_MEDIUM, MONTSERRAT_BOLD } from '../styles/fonts';

const PageDescription = s.p`
  ${POPPINS_LIGHT}
  margin-top: 1.5rem;
  padding: 0 15rem;
  color: #4a4a4a;
  line-height: 1.7;

  @media screen and (max-width: 992px) {
    padding: 0 4rem;
  }

  @media screen and (max-width: 667px) {
    padding: 0 1rem;
    font-size: 0.9rem;
  }
`;

const SectionWrapper = s.div`
  padding: 1rem 6rem 3.5rem;

  @media screen and (max-width: 992px) {
    padding: 1rem 2rem 3rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 1.25rem 2rem;
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

const TeamTitle = s.h2`
  ${MONTSERRAT_BOLD}
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TeamDescription = s.p`
  ${POPPINS_REGULAR}
  font-size: 1rem;
  width: 55%;
  margin-top: 0.75rem;
  color: #5a5a5a;
  line-height: 1.65;

  @media screen and (max-width: 992px) {
    width: 100%;
  }

  @media screen and (max-width: 667px) {
    font-size: 0.95rem;
  }
`;

const CardWrapper = s.div`
  margin-top: 2rem;
  background-color: ${WHITE};
  border: 1px solid #eae3da;
  border-top: 3px solid ${VIOLET};
  border-radius: 4px;
  padding: 1.5rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  :hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(46, 26, 61, 0.1);
  }
`;

const ImgFrame = s.div`
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 4 / 5;
`;

const MemberImg = s(Img)`
  height: 100%;
  width: 100%;
`;

const NameLink = s.a`
  ${POPPINS_SEMI_BOLD}
  font-size: 1.05rem;
  color: #111111;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease, color 0.2s ease;
  display: inline-block;
  margin-top: 1rem;

  :hover {
    border-bottom: 1px solid ${VIOLET};
    color: ${VIOLET};
  }
`;

const NameText = s.p`
  ${POPPINS_SEMI_BOLD}
  font-size: 1.05rem;
  color: #111111;
  margin-top: 1rem;
`;

const Position = s.p`
  ${POPPINS_MEDIUM}
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${VIOLET};
  margin-top: 0.3rem;
`;

const Major = s.p`
  ${POPPINS_LIGHT}
  font-size: 0.82rem;
  color: #6b6b6b;
  margin-top: 0.4rem;
`;

const Projects = s.p`
  ${POPPINS_LIGHT}
  font-size: 0.78rem;
  color: #8a8a8a;
  margin-top: 0.6rem;
  line-height: 1.5;
`;

const ProjectsBold = s.span`
  ${POPPINS_MEDIUM}
  color: #6b6b6b;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  display: block;
  margin-bottom: 0.2rem;
`;

const Card = ({ name, position, major, projects, linkedin, img, imgPosition }) => (
  <CardWrapper>
    <ImgFrame>
      <MemberImg fluid={img?.childImageSharp?.fluid} alt={name} imgStyle={{ objectPosition: imgPosition || 'center 20%' }} />
    </ImgFrame>
    {linkedin ? (
      <NameLink href={linkedin} target="_blank" rel="noreferrer">{name}</NameLink>
    ) : (
      <NameText>{name}</NameText>
    )}
    <Position>{position}</Position>
    {major && <Major>{major}</Major>}
    {projects && <Projects><ProjectsBold>Projects</ProjectsBold>{projects}</Projects>}
  </CardWrapper>
);

const Members = ({ members }) => (
  <Row>
    {members.map(member => (
      <Col lg={3} md={4} sm={6} key={member.name} className="mb-4">
        <Card {...member} />
      </Col>
    ))}
  </Row>
);

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
                position
                major
                projects
                linkedin
                imgPosition
                img {
                  childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 1000) {
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
        <TierDivider bg={PARCHMENT} />
        {teams.map((team, idx) => (
          <React.Fragment key={team.name}>
            <SectionWrapper>
              <Eyebrow>{idx === 0 ? 'Executive Board' : idx === teams.length - 1 ? 'Client-Facing Leadership' : ''}</Eyebrow>
              <TeamTitle>{team.name}</TeamTitle>
              <TeamDescription>{team.description}</TeamDescription>
              <Members members={team.members} />
            </SectionWrapper>
            {idx < teams.length - 1 && <TierDivider bg={PARCHMENT} />}
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
};

export default Teams;
