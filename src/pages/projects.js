import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import {
  Container,
  PageTitle,
  PageDescription
} from '../components'
import { POPPINS_LIGHT } from '../styles/fonts'
import { WHITE as WHITE_TOKEN } from '../styles/constants'

const WHITE = WHITE_TOKEN
const BOX_SHADOW = `0px 5px 20px rgba(27, 20, 32, 0.08)`

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

const LogosCard = s.div`
  background-color: ${WHITE};
  border-radius: 4px;
  border: 1px solid #eae3da;
  box-shadow: ${BOX_SHADOW};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledImg = s(Img)`
  width: 100%;
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "misc/client-logos.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container title="Projects | ">
      <StyledRow style={{ margin: '5rem 0 2rem 0' }}>
        <Col lg={4}>
          <PageTitle> Our Projects </PageTitle>
          <StyledPageDescription>
          Consultants at the Wharton branch of the Global Research and Consulting Group (GRC) engage in pro-bono consulting projects aimed at driving social good. They work with a diverse range of clients, including global non-profits, social impact startups, and governmental organizations, to help them achieve their goals. The projects span various sectors such as education, global health, and sustainability, providing strategic advice and innovative solutions. By participating in these projects, Wharton GRC consultants not only contribute to meaningful global change but also gain valuable experience in consulting and leadership. The Wharton GRC team is dedicated to empowering students to give back to the global community while fostering a collaborative and inclusive environment.
          </StyledPageDescription>
        </Col>
        <Col lg={8}>
          <LogosCard>
            <StyledImg fluid={data.file.childImageSharp.fluid} alt="Our clients" />
          </LogosCard>
        </Col>
      </StyledRow>
    </Container>
  )
}

export default Projects
