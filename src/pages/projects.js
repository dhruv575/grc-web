import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import {
  Container,
  Chevron,
  PageTitle,
  PageDescription,
  StyledAnchor
} from '../components'
import { POPPINS_LIGHT, POPPINS_SEMI_BOLD } from '../styles/fonts'

const WHITE = `#FFFFFF`
const DARK_BLUE = `#1e3a8a`
const BOX_SHADOW = `0px 5px 20px rgba(0, 0, 0, 0.1)`

const CardWrapper = s.div.attrs(({ className }) => ({
  className
}))`
  background-color: ${WHITE};
  border-radius: 15px;
  box-shadow: ${BOX_SHADOW};
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${({ flush }) => flush || `padding-bottom: 30px;`}
  ${({ fixed }) =>
    fixed ||
    `:hover {
    transform: scale(1.01);
  }`}
  transition: all 0.3s;
  margin-bottom: 60px;
  overflow: hidden;
`

const CardHeader = s.h2`
  padding-right: 40px;
  padding-left: 40px;
  margin-top: 30px;
  color: black;
  ${POPPINS_SEMI_BOLD}
`

const Content = s.p`
  margin-right: 40px;
  margin-left: 40px;
  color: black;
  font-size: 90%;
  margin-top: 1rem;
  ${POPPINS_LIGHT}

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`

const ImgWrapper = s.div`
  background-color: ${DARK_BLUE};
  padding: 2rem 0;
`

const StyledImg = s(Img)`
  width: 85%;
  display: block;
  margin: 0 auto;

  @media (max-width: 992px) {
    width: 200px;
  }
`

const CardContent = ({ name, link, description, img }) => (
  <>
    <ImgWrapper>
      <StyledImg fluid={img.childImageSharp.fluid} />
    </ImgWrapper>
    <CardHeader href={link}>{name}</CardHeader>
    <Content>
      <p style={{ paddingRight: '1rem' }}>{description} </p>
      <Chevron
        bgColor={DARK_BLUE}
        color={WHITE}
        floatRight
        link={link}
      />
    </Content>
  </>
)

const Card = ({ className, children, flush }) => (
  <CardWrapper className={className} flush={flush}>
    {children}
  </CardWrapper>
)

const StyledRow = s(Row)`
  padding: 0 3rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const StyledPageDescription = s(PageDescription)`
  ${POPPINS_LIGHT}
  padding-right: 2rem;

  @media (max-width: 992px) {
    padding-right: 0rem;
  }
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "projects.json" } }) {
        edges {
          node {
            childrenProjectsJson {
              img {
                childImageSharp {
                  fluid(maxWidth: 1100) {
                    ...GatsbyImageSharpFluid
                    src
                  }
                }
              }
              name
              description
              link
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenProjectsJson : projects }
  } = data.allFile.edges[0]

  return (
    <Container title="Projects | ">
      <StyledRow style={{ margin: '5rem 0 2rem 0' }}>
        <Col lg={4}>
          <PageTitle> Our Projects </PageTitle>
          <StyledPageDescription>
          Consultants at the Wharton branch of the Global Research and Consulting Group (GRC) engage in pro-bono consulting projects aimed at driving social good. They work with a diverse range of clients, including global non-profits, social impact startups, and governmental organizations, to help them achieve their goals. The projects span various sectors such as education, global health, and sustainability, providing strategic advice and innovative solutions. By participating in these projects, Wharton GRC consultants not only contribute to meaningful global change but also gain valuable experience in consulting and leadership. The Wharton GRC team is dedicated to empowering students to give back to the global community while fostering a collaborative and inclusive environment.
            <StyledAnchor href="https://thedp.com" target="_blank">
              website.
            </StyledAnchor>
          </StyledPageDescription>
        </Col>
        <Col lg={8}>
          <Row>
            {projects.map((project, idx) => (
              <Col md={6} key={idx}>
                <Card>
                  <CardContent {...project} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </StyledRow>
    </Container>
  )
}

export default Projects