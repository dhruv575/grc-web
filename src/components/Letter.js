import React from 'react';
import styled from 'styled-components';
import image from '../images/members/business/zain.jpg'; // Path to the image
import { PLAYFAIR_DISPLAY_MEDIUM } from '../styles/fonts';

const LetterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 7rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 2rem;
  }
`;

const ProfileSection = styled.section`
  text-align: center; // Center content for mobile
  margin-right: 2rem; // Space between image and text
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px; // Adjust as needed
  height: auto;
  border-radius: 4px; // Optional: if you want rounded corners
`;

const Name = styled.h2`
  margin: 1rem 0 0rem;
  font-style: italic;
`;

const Title = styled.h1`
  ${PLAYFAIR_DISPLAY_MEDIUM}
  font-style: italic;
  font-size: 1.5rem;
  margin: 1.5rem 0;
`;

const Role = styled.p`
  font-weight: bold;
`;

const EmailLink = styled.a`
  color: #0077cc;
  text-decoration: none;
`;

const TextColumn = styled.div`
  flex: 2;
  max-width: 640px; // Ensures the text doesn't stretch too far on large screens
`;

const BodyText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

// Component
const LetterFromPresident = () => {
  return (
    <LetterContainer>
      <ProfileSection>
        <ProfileImage src={image} alt="Zain Qureshi" />
        <Name>Zain Qureshi</Name>
        <Role>140th Board Business Manager</Role>
        <EmailLink href="mailto:zainq@wharton.upenn.edu">zainq@wharton.upenn.edu</EmailLink>
      </ProfileSection>
      <TextColumn>
        <Title>A Letter from the Business Manager:</Title>
        <BodyText>I’m excited to welcome you to the Daily Pennsylvanian’s Business Department website. </BodyText>
        <BodyText>
        Since 1885, the DP has held an important role on-campus as the University of Pennsylvania’s student newspaper. As the leading independent student media organization at Penn, The Daily Pennsylvanian, Inc. seeks to inform and drive conversation while providing enduring student experiences in journalism, business, and leadership. DP Business exists to support the DP in its mission, and to ensure the company has a strong financial standing.
        </BodyText>
        <BodyText>Within the DP Business departments, we seek to foster a collaborative, engaging, and inclusive community that is committed to supporting student media and journalism. With a team of 45 students across three undergraduate schools, DP Business offers students the opportunity to work for an independent, functioning company. I invite you all to learn more about us through our website and the DP’s social media. Please reach out to my email qureshi@thedp.com  if you have any questions.</BodyText>
        <BodyText>I hope to see you in the office,</BodyText>
        <BodyText>Zain Qureshi</BodyText>
        <BodyText>Business Manager</BodyText>
      </TextColumn>
    </LetterContainer>
  );
};

export default LetterFromPresident;
