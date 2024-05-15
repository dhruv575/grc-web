import React from 'react';
import styled from 'styled-components';
import image1 from '../images/members/business/zain.jpg'; // Path to the first image
import image2 from '../images/members/business/zain.jpg'; // Path to the second image
import { PLAYFAIR_DISPLAY_MEDIUM } from '../styles/fonts';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 2rem;
  }
`;

const LetterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
  background-color: #1e3a8a;
  flex: 1;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);

  transition: transform 0.3s ease; // Smooth transition effect

  &:hover {
    transform: scale(1.03); // Slightly enlarge the container on hover
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
  }
`;

const ProfileSection = styled.section`
  text-align: center;
  margin-right: 2rem;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 4px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
`;

const Name = styled.h2`
  margin: 1rem 0 0rem;
  font-style: italic;
  color: #ffffff;
`;

const Title = styled.h1`
  ${PLAYFAIR_DISPLAY_MEDIUM}
  font-style: italic;
  font-size: 1.5rem;
  margin: 1.5rem 0;
`;

const Role = styled.p`
  font-weight: bold;
  color: #ffffff;
`;

const EmailLink = styled.a`
  color: #0077cc;
  color: #ffffff;
  text-decoration: none;
`;

const TextColumn = styled.div`
  flex: 2;
  max-width: 640px;
  color: #ffffff;

`;

const BodyText = styled.p`
  font-size: 1rem;
  color: #ffffff;
  line-height: 1.6;
`;

// Single Letter Component
const Letter = ({ image, name, role, email, letterText }) => (
  <LetterContainer>
    <ProfileSection>
      <ProfileImage src={image} alt={name} />
      <Name>{name}</Name>
      <Role>{role}</Role>
      <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
    </ProfileSection>
    <TextColumn>
      {letterText.map((text, index) => (
        <BodyText key={index}>{text}</BodyText>
      ))}
    </TextColumn>
  </LetterContainer>
);

const LetterFromPresidents = () => {
  return (
    <Container>
      <Letter
        image={image1}
        name="Richard Liu"
        role="GRC President"
        email="rliu@wharton.upenn.edu"
        letterText={[
          "I’m excited to welcome you to the Daily Pennsylvanian’s Business Department website.",
          "Since 1885, the DP has held an important role on-campus as the University of Pennsylvania’s student newspaper. As the leading independent student media organization at Penn, The Daily Pennsylvanian, Inc. seeks to inform and drive conversation while providing enduring student experiences in journalism, business, and leadership. DP Business exists to support the DP in its mission, and to ensure the company has a strong financial standing.",
          "Within the DP Business departments, we seek to foster a collaborative, engaging, and inclusive community that is committed to supporting student media and journalism. With a team of 45 students across three undergraduate schools, DP Business offers students the opportunity to work for an independent, functioning company. I invite you all to learn more about us through our website and the DP’s social media. Please reach out to my email qureshi@thedp.com if you have any questions.",
          "I hope to see you in the office,",
          "Richard Liu",
        ]}
      />
      <Letter
        image={image2}
        name="Julian Ward"
        role="GRC President"
        email="julian@wharton.upenn.edu"
        letterText={[
          "Welcome to the new Business Department website.",
          "The DP has been a cornerstone of the Penn community since 1885. As the premier student-run media organization at Penn, we strive to inform, engage, and create meaningful student experiences in journalism, business, and leadership. The Business department supports the DP's mission by ensuring financial stability and growth.",
          "Our department values collaboration, inclusivity, and innovation. With a diverse team of students from various undergraduate schools, we provide unique opportunities to work in a dynamic and independent company. Explore our website and connect with us on social media. For any inquiries, feel free to email me at another@thedp.com.",
          "Looking forward to seeing you,",
          "Julian Ward",
        ]}
      />
    </Container>
  );
};

export default LetterFromPresidents;
