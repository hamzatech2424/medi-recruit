import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

// Animations
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

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(59, 130, 246, 0.8), rgba(6, 182, 212, 0.8)), 
              url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: ${theme.colors.white};
  padding: ${theme.spacing['4xl']} 0;
  margin-top: 80px;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: ${theme.colors.gradients.healthcare};
    opacity: 0.1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, ${theme.colors.primary}20 0%, transparent 70%);
    animation: ${float} 6s ease-in-out infinite;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
    background-attachment: scroll;
  }
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(6, 182, 212, 0.8) 100%);
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  position: relative;
  z-index: 2;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    padding: 0 ${theme.spacing.lg};
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['3xl']};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${theme.spacing.xl};
  }
`;

const HeroText = styled.div`
  animation: ${fadeInUp} 1s ease-out;
  
  h1 {
    font-size: ${theme.fontSize['6xl']};
    font-weight: 700;
    margin-bottom: ${theme.spacing.lg};
    line-height: 1.1;
    color: ${theme.colors.white};
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    
    .highlight {
      background: ${theme.colors.gradients.vibrant};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: none;
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize['4xl']};
    }
  }
  
  p {
    font-size: ${theme.fontSize.xl};
    margin-bottom: ${theme.spacing.xl};
    color: ${theme.colors.gray[100]};
    line-height: 1.6;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize.lg};
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: ${theme.fontSize.lg};
  gap: ${theme.spacing.sm};
  
  &.primary {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    box-shadow: ${theme.shadows.lg};
    
    &:hover {
      background: ${theme.colors.gray[50]};
      transform: translateY(-3px);
      box-shadow: ${theme.shadows.xl};
    }
  }
  
  &.secondary {
    background: transparent;
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.white};
    backdrop-filter: blur(10px);
    
    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.primary};
      transform: translateY(-3px);
      box-shadow: ${theme.shadows.lg};
    }
  }
`;

const HeroImage = styled.div`
  position: relative;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
  
  .medical-icons {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    
    .icon {
      position: absolute;
      width: 60px;
      height: 60px;
      background: ${theme.colors.white};
      border-radius: ${theme.borderRadius.full};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      box-shadow: ${theme.shadows.lg};
      animation: ${pulse} 2s ease-in-out infinite;
      
      &:nth-child(1) {
        top: 10%;
        left: 10%;
        background: ${theme.colors.gradients.primary};
        color: ${theme.colors.white};
        animation-delay: 0s;
      }
      
      &:nth-child(2) {
        top: 20%;
        right: 15%;
        background: ${theme.colors.gradients.secondary};
        color: ${theme.colors.white};
        animation-delay: 0.5s;
      }
      
      &:nth-child(3) {
        bottom: 30%;
        left: 5%;
        background: ${theme.colors.gradients.indigo};
        color: ${theme.colors.white};
        animation-delay: 1s;
      }
      
      &:nth-child(4) {
        bottom: 20%;
        right: 10%;
        background: ${theme.colors.gradients.orange};
        color: ${theme.colors.white};
        animation-delay: 1.5s;
      }
    }
  }
  
  .main-image {
    width: 100%;
    height: auto;
    border-radius: ${theme.borderRadius.xl};
    box-shadow: ${theme.shadows.xl};
    position: relative;
    z-index: 1;
    border: 3px solid ${theme.colors.white};
  }
  
  @media (max-width: ${theme.breakpoints.lg}) {
    order: -1;
    
    .medical-icons .icon {
      width: 50px;
      height: 50px;
      font-size: 1.2rem;
    }
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing['3xl']};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${theme.colors.gradients.primary};
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.modern};
    background: rgba(255, 255, 255, 1);
  }
  
  &:nth-child(1)::before {
    background: ${theme.colors.gradients.primary};
  }
  
  &:nth-child(2)::before {
    background: ${theme.colors.gradients.secondary};
  }
  
  &:nth-child(3)::before {
    background: ${theme.colors.gradients.indigo};
  }
  
  .stat-icon {
    width: 70px;
    height: 70px;
    margin: 0 auto ${theme.spacing.md};
    background: ${theme.colors.gradients.primary};
    border-radius: ${theme.borderRadius.xl};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: ${theme.colors.white};
    box-shadow: ${theme.shadows.medical};
    transition: all 0.3s ease;
  }
  
  &:hover .stat-icon {
    transform: scale(1.1) rotate(5deg);
  }
  
  &:nth-child(1) .stat-icon {
    background: ${theme.colors.gradients.primary};
  }
  
  &:nth-child(2) .stat-icon {
    background: ${theme.colors.gradients.secondary};
  }
  
  &:nth-child(3) .stat-icon {
    background: ${theme.colors.gradients.indigo};
  }
  
  h3 {
    font-size: ${theme.fontSize['4xl']};
    font-weight: 700;
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.textPrimary};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize['3xl']};
    }
  }
  
  p {
    font-size: ${theme.fontSize.lg};
    color: ${theme.colors.textSecondary};
    margin: 0;
    font-weight: 500;
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize.base};
    }
  }
`;

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Hero = () => {
  return (
    <HeroSection>
      <VideoBackground>
        <video autoPlay muted loop playsInline>
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoBackground>
      
      <HeroContainer>
        <HeroContent>
          <HeroText>
            <h1>
              Leading <span className="highlight">Patient Identification</span> Solutions for Healthcare
            </h1>
            <p>
              Trusted by healthcare facilities worldwide for over 50 years. We provide innovative 
              patient identification technology that ensures safety, accuracy, and efficiency in 
              medical care delivery.
            </p>
            <HeroButtons>
              <HeroButton to="/products" className="primary">
                <span>🏥</span>
                Explore Solutions
              </HeroButton>
              <HeroButton to="/about" className="secondary">
                <span>📋</span>
                Learn More
              </HeroButton>
            </HeroButtons>
          </HeroText>
          
          <HeroImage>
            <div className="medical-icons">
              <div className="icon">⚕️</div>
              <div className="icon">💊</div>
              <div className="icon">🩺</div>
              <div className="icon">📊</div>
            </div>
            <img 
              className="main-image"
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Healthcare professional with patient"
            />
          </HeroImage>
        </HeroContent>
        
        <StatsContainer>
          <StatItem>
            <div className="stat-icon">⚕️</div>
            <h3><AnimatedCounter end={50} suffix="+" /></h3>
            <p>Years of Medical Excellence</p>
          </StatItem>
          <StatItem>
            <div className="stat-icon">👥</div>
            <h3><AnimatedCounter end={10} suffix="M+" /></h3>
            <p>Patients Connected Annually</p>
          </StatItem>
          <StatItem>
            <div className="stat-icon">🏢</div>
            <h3><AnimatedCounter end={100} suffix="+" /></h3>
            <p>Healthcare Facilities Served</p>
          </StatItem>
        </StatsContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
