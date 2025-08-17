import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const AboutContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.backgroundLight};
  padding-top: 80px;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing['4xl']} ${theme.spacing.md};
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: ${theme.spacing['5xl']};
  animation: ${fadeInUp} 1s ease-out;
  
  h1 {
    font-size: ${theme.fontSize['5xl']};
    font-weight: 800;
    color: #2F70F0;
    margin-bottom: ${theme.spacing.lg};
  }
  
  p {
    font-size: ${theme.fontSize.xl};
    color: ${theme.colors.textSecondary};
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    h1 {
      font-size: ${theme.fontSize['4xl']};
    }
    
    p {
      font-size: ${theme.fontSize.lg};
    }
  }
`;

const MissionSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['4xl']};
  align-items: center;
  margin-bottom: ${theme.spacing['5xl']};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing['3xl']};
  }
`;

const MissionContent = styled.div`
  animation: ${slideInLeft} 1s ease-out;
  
  h2 {
    font-size: ${theme.fontSize['4xl']};
    font-weight: 700;
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing.lg};
  }
  
  p {
    font-size: ${theme.fontSize.lg};
    color: ${theme.colors.textSecondary};
    line-height: 1.7;
    margin-bottom: ${theme.spacing.lg};
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      display: flex;
      align-items: center;
      margin-bottom: ${theme.spacing.md};
      font-size: ${theme.fontSize.base};
      color: ${theme.colors.textSecondary};
      
      &::before {
        content: '✓';
        color: ${theme.colors.primary};
        font-weight: bold;
        margin-right: ${theme.spacing.sm};
        font-size: ${theme.fontSize.lg};
      }
    }
  }
`;

const MissionImage = styled.div`
  animation: ${slideInRight} 1s ease-out;
  
  .image-container {
    position: relative;
    border-radius: ${theme.borderRadius['2xl']};
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${theme.colors.gradients.medical};
      opacity: 0.1;
      z-index: 1;
    }
    
    img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.4s ease;
    }
    
    &:hover img {
      transform: scale(1.05);
    }
  }
`;

const ValuesSection = styled.section`
  text-align: center;
  
  h2 {
    font-size: ${theme.fontSize['4xl']};
    font-weight: 700;
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing['3xl']};
    animation: ${fadeInUp} 1s ease-out;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: ${theme.colors.white};
  padding: ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 1s ease-out;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }
  
  .icon {
    width: 80px;
    height: 80px;
    background: ${theme.colors.gradients.medical};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing.lg};
    font-size: 2rem;
    color: ${theme.colors.white};
    animation: ${pulse} 2s ease-in-out infinite;
  }
  
  h3 {
    font-size: ${theme.fontSize.xl};
    font-weight: 600;
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing.md};
  }
  
  p {
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
  }
`;

const About = () => {
  const values = [
    {
      icon: '🏥',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality healthcare recruitment solutions.'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We operate with complete transparency and ethical practices, building trust with our clients and candidates.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We continuously innovate our processes and technology to stay ahead in the healthcare recruitment industry.'
    },
    {
      icon: '❤️',
      title: 'Care',
      description: 'We care deeply about the healthcare professionals we serve and the patients they care for.'
    }
  ];

  return (
    <AboutContainer>
      <AboutContent>
        <HeroSection>
          <h1>About HealthTalentHub</h1>
          <p>
            We are a leading healthcare recruitment platform dedicated to connecting exceptional healthcare professionals 
            with outstanding opportunities worldwide. Our mission is to transform healthcare staffing through innovative 
            technology and personalized service.
          </p>
        </HeroSection>

        <MissionSection>
          <MissionContent>
            <h2>Our Mission</h2>
            <p>
              At HealthTalentHub, we believe that exceptional healthcare starts with exceptional people. 
              Our mission is to bridge the gap between talented healthcare professionals and the institutions 
              that need them, ensuring quality care reaches every patient.
            </p>
            <ul>
              <li>Connect healthcare professionals with ideal opportunities</li>
              <li>Provide comprehensive support throughout the recruitment process</li>
              <li>Ensure compliance with healthcare regulations and standards</li>
              <li>Foster long-term partnerships between professionals and institutions</li>
            </ul>
          </MissionContent>
          <MissionImage>
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Healthcare professionals working together"
              />
            </div>
          </MissionImage>
        </MissionSection>

        <ValuesSection>
          <h2>Our Values</h2>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard key={index}>
                <div className="icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
