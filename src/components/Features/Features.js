import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

const FeaturesSection = styled.section`
  padding: ${theme.spacing['2xl']} 0;
  background: ${theme.colors.backgroundSecondary};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: ${theme.colors.gradients.healthcare};
    opacity: 0.02;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
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
  margin-bottom: ${theme.spacing['2xl']};
  
  h2 {
    font-size: ${theme.fontSize['4xl']};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing.lg};
    background: ${theme.colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize['3xl']};
    }
  }
  
  p {
    font-size: ${theme.fontSize.xl};
    color: ${theme.colors.textSecondary};
    max-width: 600px;
    margin: 0 auto;
    
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
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid ${theme.colors.gray[100]};
  
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
    border-color: ${theme.colors.primary}20;
  }
  
  &:nth-child(1) {
    &::before {
      background: ${theme.colors.gradients.primary};
    }
  }
  
  &:nth-child(2) {
    &::before {
      background: ${theme.colors.gradients.secondary};
    }
  }
`;

const FeatureIcon = styled.div`
  width: 90px;
  height: 90px;
  background: ${theme.colors.gradients.primary};
  border-radius: ${theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.lg};
  font-size: ${theme.fontSize['4xl']};
  color: ${theme.colors.white};
  box-shadow: ${theme.shadows.medical};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  ${FeatureCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    
    &::before {
      transform: translateX(100%);
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
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize.xl};
    }
  }
  
  p {
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.spacing.lg};
    line-height: 1.6;
  }
`;

const FeatureButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  
  &:hover {
    color: ${theme.colors.primaryDark};
    transform: translateX(4px);
    background: ${theme.colors.gray[50]};
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

const Features = () => {
  const features = [
    {
      icon: '⚕️',
      title: 'Patient Identification Solutions',
      description: 'Medirex has patented, Health Canada approved, patient identification solutions for acute care facilities of all sizes. Our custom solutions include hospital wristbands, patient bracelets, labels, and carbonless forms.',
      link: '/patient-identification'
    },
    {
      icon: '📱',
      title: 'Patient Engagement with mySPOT',
      description: 'Your hospital wristband is the Single Point Of Truth. Activated with the mySPOT ecosystem, hospitals can access a powerful engagement data analysis tool and patients can connect with a robust personalized mobile app.',
      link: '/myspot'
    }
  ];

  return (
    <FeaturesSection>
      <Container>
        <SectionHeader>
          <h2>Healthcare is our priority</h2>
          <p>
            Understanding the patient journey, we look for new ways to build patient connections for hospitals
          </p>
        </SectionHeader>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
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
