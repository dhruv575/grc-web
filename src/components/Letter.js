import React from 'react';
import styled from 'styled-components';
import image1 from '../images/members/board/richard.jpg'; // Path to the first image
import image2 from '../images/members/board/julian.jpg'; // Path to the second image
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
        email="rliu2004@wharton.upenn.edu"
        letterText={[
          "Welcone to GRC Wharton!",
          "Since 2016, GRC Wharton has played a crucial role in driving global social impact and empowering future leaders. As a leading student-run organization, we aim to inform and inspire while providing valuable experiences in business, leadership, and social responsibility. GRC Business supports our mission by ensuring strong financial health and growth.",
          "Within GRC, we foster a collaborative, engaging, and inclusive community dedicated to supporting impactful projects. With a diverse team of students, GRC offers the opportunity to work for an independent, dynamic organization.",
          "I hope to see you join the team,",
          "Richard Liu"
        ]}
      />
      <Letter
        image={image2}
        name="Julian Ward"
        role="GRC President"
        email="jward18@wharton.upenn.edu"
        letterText={[
          "Hey Future GRCer!",
          "The GRC Wharton branch, established in 2016, is dedicated to driving global social impact and empowering future leaders. We have completed over 140 projects with clients like UNESCO, Microsoft, and the World Bank.",
          "Our team values collaboration, inclusivity, and innovation. We offer unique opportunities to work on impactful projects across education, global health, sustainability, and more.",
          "Explore our website and connect with us on social media. For any inquiries, feel free to email me at jward18@wharton.upenn.edu.",
          "Looking forward to seeing you,",
          "Julian Ward"
        ]}
      />
    </Container>
  );
};

export default LetterFromPresidents;
