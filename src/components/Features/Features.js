import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

// Smoother Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
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
    transform: translateY(-8px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
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

const FeaturesSection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: ${theme.colors.backgroundSecondary};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: ${theme.colors.gradients.healthcare};
    opacity: 0.03;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, ${theme.colors.primary}10 0%, transparent 70%);
    animation: ${float} 8s ease-in-out infinite;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  position: relative;
  z-index: 2;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    padding: 0 ${theme.spacing.lg};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
  animation: ${fadeInUp} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  h2 {
    font-size: ${theme.fontSize['4xl']};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing.lg};
    background: ${theme.colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: ${theme.colors.gradients.primary};
      border-radius: 2px;
      animation: ${pulse} 2s ease-in-out infinite;
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize['3xl']};
    }
  }
  
  p {
    font-size: ${theme.fontSize.xl};
    color: ${theme.colors.textSecondary};
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize.lg};
    }
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing['2xl']};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const FeatureCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.md};
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: ${fadeInUp} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  border: 1px solid ${theme.colors.gray[100]};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.colors.gradients.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent 0%, ${theme.colors.primary}05 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${theme.shadows.modern};
    border-color: ${theme.colors.primary}30;
    
    &::before {
      transform: scaleX(1);
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  &:nth-child(1) {
    animation: ${slideInLeft} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    &::before {
      background: ${theme.colors.gradients.primary};
    }
  }
  
  &:nth-child(2) {
    animation: ${slideInRight} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    &::before {
      background: ${theme.colors.gradients.secondary};
    }
  }
`;

const FeatureIcon = styled.div`
  width: 100px;
  height: 100px;
  background: ${theme.colors.gradients.primary};
  border-radius: ${theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.lg};
  font-size: ${theme.fontSize['4xl']};
  color: ${theme.colors.white};
  box-shadow: ${theme.shadows.medical};
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: ${rotate} 3s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${FeatureCard}:hover & {
    transform: scale(1.08) rotate(3deg);
    box-shadow: ${theme.shadows.medicalTeal};
    
    &::before {
      transform: translateX(100%);
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  ${FeatureCard}:nth-child(1) & {
    background: ${theme.colors.gradients.primary};
    box-shadow: ${theme.shadows.medical};
  }
  
  ${FeatureCard}:nth-child(2) & {
    background: ${theme.colors.gradients.secondary};
    box-shadow: ${theme.shadows.medicalTeal};
  }
`;

const FeatureContent = styled.div`
  h3 {
    font-size: ${theme.fontSize['2xl']};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing.md};
    font-weight: 600;
    transition: color 0.3s ease;
    
    ${FeatureCard}:hover & {
      color: ${theme.colors.primary};
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize.xl};
    }
  }
  
  p {
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.spacing.lg};
    line-height: 1.7;
    font-size: ${theme.fontSize.lg};
  }
`;

const FeatureButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${theme.colors.gradients.primary};
    transition: left 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: ${theme.colors.white};
    transform: translateX(6px);
    
    &::before {
      left: 0;
    }
  }
  
  &::after {
    content: '→';
    margin-left: ${theme.spacing.xs};
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(4px);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  
  .floating-element {
    position: absolute;
    width: 20px;
    height: 20px;
    background: ${theme.colors.primary}20;
    border-radius: 50%;
    animation: ${float} 6s ease-in-out infinite;
    
    &:nth-child(1) {
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      top: 20%;
      right: 15%;
      animation-delay: 2s;
    }
    
    &:nth-child(3) {
      bottom: 30%;
      left: 5%;
      animation-delay: 4s;
    }
    
    &:nth-child(4) {
      bottom: 20%;
      right: 10%;
      animation-delay: 1s;
    }
  }
`;

const Features = () => {
  const features = [
    {
      icon: '⚕️',
      title: 'Healthcare Talent Solutions',
      description: 'HealthTalentHub provides comprehensive recruitment solutions for healthcare facilities of all sizes. Our platform connects qualified medical professionals with leading healthcare institutions worldwide.',
      link: '/talent-solutions'
    },
    {
      icon: '📱',
      title: 'Professional Engagement Platform',
      description: 'Our innovative platform serves as the Single Point Of Truth for healthcare recruitment. Hospitals can access powerful talent analytics and professionals can connect with personalized career opportunities.',
      link: '/platform'
    }
  ];

  return (
    <FeaturesSection>
      <FloatingElements>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </FloatingElements>
      
      <Container>
        <SectionHeader>
          <h2>Healthcare talent is our priority</h2>
          <p>
            Understanding the healthcare recruitment journey, we look for new ways to build connections between professionals and facilities
          </p>
        </SectionHeader>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureContent>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <FeatureButton to={feature.link}>
                  Learn More
                </FeatureButton>
              </FeatureContent>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
