import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

// Enhanced Modern Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
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

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.9) 0%, 
    rgba(6, 182, 212, 0.9) 50%, 
    rgba(99, 102, 241, 0.9) 100%);
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
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: ${float} 8s ease-in-out infinite;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
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
    opacity: 0.2;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.8) 0%, 
      rgba(6, 182, 212, 0.8) 50%, 
      rgba(99, 102, 241, 0.8) 100%);
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
  animation: ${slideInLeft} 1.2s ease-out;
  
  h1 {
    font-size: ${theme.fontSize['6xl']};
    font-weight: 800;
    margin-bottom: ${theme.spacing.lg};
    line-height: 1.1;
    color: ${theme.colors.white};
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.02em;
    
    .highlight {
      background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: none;
      position: relative;
      display: inline-block;
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize['4xl']};
    }
  }
  
  p {
    font-size: ${theme.fontSize.xl};
    margin-bottom: ${theme.spacing.xl};
    color: ${theme.colors.gray[100]};
    line-height: 1.7;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    font-weight: 400;
    
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
  border-radius: ${theme.borderRadius.xl};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${theme.fontSize.lg};
  gap: ${theme.spacing.sm};
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &.primary {
    background: rgba(255, 255, 255, 0.95);
    color: ${theme.colors.primary};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    &:hover {
      background: rgba(255, 255, 255, 1);
      transform: translateY(-6px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
  }
  
  &.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: ${theme.colors.white};
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-6px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
  }
`;

const HeroImage = styled.div`
  position: relative;
  animation: ${slideInRight} 1.2s ease-out 0.3s both;
  
  .main-image {
    width: 100%;
    height: auto;
    border-radius: ${theme.borderRadius['2xl']};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
    border: 3px solid rgba(255, 255, 255, 0.3);
    transition: all 0.4s ease;
    backdrop-filter: blur(10px);
    
    &:hover {
      transform: scale(1.03);
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 255, 255, 0.5);
    }
  }
  
  @media (max-width: ${theme.breakpoints.lg}) {
    order: -1;
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
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  animation: ${fadeInUp} 1s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #06b6d4, #6366f1);
    background-size: 200% 100%;
    animation: ${gradientShift} 3s ease-in-out infinite;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 1);
  }
  
  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  
  .stat-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto ${theme.spacing.md};
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    border-radius: ${theme.borderRadius.xl};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: ${theme.colors.white};
    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
    transition: all 0.3s ease;
  }
  
  &:hover .stat-icon {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 16px 48px rgba(59, 130, 246, 0.4);
  }
  
  &:nth-child(1) .stat-icon {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
  }
  
  &:nth-child(2) .stat-icon {
    background: linear-gradient(135deg, #06b6d4, #0891b2);
  }
  
  &:nth-child(3) .stat-icon {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
  }
  
  h3 {
    font-size: ${theme.fontSize['4xl']};
    font-weight: 800;
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.textPrimary};
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
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
