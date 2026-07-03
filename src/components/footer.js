import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'

import { POPPINS_REGULAR, POPPINS_BOLD } from '../styles/fonts'
import { StyledLink } from './typography'
import { PLUM_DEEP, WHITE, ACCENT } from '../styles/constants'

const Wrapper = s.footer`
  background-color: ${PLUM_DEEP};
  color: rgba(255, 255, 255, 0.55);
  padding: 2.75rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
`

const FBrand = s.div`
  color: ${WHITE};
  ${POPPINS_BOLD}
`

const FLinks = s.div`
  display: flex;
  gap: 1.4rem;
  flex-wrap: wrap;
`

const FLink = s(Link)`
  color: rgba(255, 255, 255, 0.65) !important;
  transition: color 0.2s ease;

  :hover {
    color: ${ACCENT} !important;
  }
`

const FAnchor = s.a`
  color: rgba(255, 255, 255, 0.65);
  transition: color 0.2s ease;

  :hover {
    color: ${ACCENT};
  }
`

const FooterText = s.p`
  ${POPPINS_REGULAR}
  font-size: 0.85rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.55);
`

const ApplyButton = s.div`
  background-color: ${ACCENT};
  color: ${PLUM_DEEP};
  ${POPPINS_BOLD}
  border-radius: 2px;
  padding: 0.35rem 1rem;
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-top: 0.6rem;
`

const InternalSections = [
  { title: 'Team', link: '/team' },
  { title: 'Projects', link: '/projects' }
]

const ExternalSections = [
  { title: 'LinkedIn', link: 'https://www.linkedin.com/company/grcglobalgroup/' },
  { title: 'Facebook', link: 'https://www.facebook.com/whartongrc/' },
  { title: 'Instagram', link: 'https://www.instagram.com/grc_wharton/' }
]

export const Footer = () => (
  <Wrapper>
    <div>
      <FBrand>Wharton GRC</FBrand>
      <FooterText>wharton@grcglobalgroup.com</FooterText>
      <StyledLink to="/apply">
        <ApplyButton>Apply</ApplyButton>
      </StyledLink>
    </div>
    <FLinks>
      {InternalSections.map(({ title, link }) => (
        <FLink to={link} key={title}>{title}</FLink>
      ))}
      {ExternalSections.map(({ title, link }) => (
        <FAnchor href={link} target="_blank" rel="noreferrer" key={title}>{title}</FAnchor>
      ))}
    </FLinks>
    <FooterText>© {new Date().getFullYear()} Wharton GRC · Global Research and Consulting</FooterText>
  </Wrapper>
)
