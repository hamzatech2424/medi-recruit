import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
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
    transform: scale(1.02);
  }
`;

const ReviewsSection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
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
  margin-top: -60px;
  
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

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing['3xl']};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.md};
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid ${theme.colors.gray[100]};
  animation: ${fadeInUp} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover {
    transform: translateY(-6px);
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: ${theme.shadows.lg};
  }
  
  .stat-number {
    font-size: ${theme.fontSize['4xl']};
    font-weight: 700;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.sm};
  }
  
  .stat-label {
    font-size: ${theme.fontSize.lg};
    color: ${theme.colors.textSecondary};
    font-weight: 500;
  }
  
  .stat-icon {
    font-size: 2rem;
    margin-bottom: ${theme.spacing.md};
    animation: ${pulse} 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  }
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid ${theme.colors.gray[100]};
  position: relative;
  overflow: hidden;
  animation: ${slideIn} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &::before {
    content: '"';
    position: absolute;
    top: ${theme.spacing.md};
    left: ${theme.spacing.md};
    font-size: 4rem;
    color: ${theme.colors.primary}20;
    font-family: serif;
    line-height: 1;
  }
  
  &:hover {
    transform: translateY(-8px);
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: ${theme.shadows.modern};
    border-color: ${theme.colors.primary}20;
  }
  
  .review-content {
    margin-bottom: ${theme.spacing.lg};
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
    font-style: italic;
    position: relative;
    z-index: 1;
  }
  
  .reviewer-info {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
  }
  
  .reviewer-avatar {
    width: 50px;
    height: 50px;
    border-radius: ${theme.borderRadius.full};
    background: ${theme.colors.gradients.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-weight: 600;
    font-size: ${theme.fontSize.lg};
  }
  
  .reviewer-details {
    flex: 1;
  }
  
  .reviewer-name {
    font-weight: 600;
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing.xs};
  }
  
  .reviewer-title {
    font-size: ${theme.fontSize.sm};
    color: ${theme.colors.textSecondary};
  }
  
  .rating {
    display: flex;
    gap: ${theme.spacing.xs};
    margin-bottom: ${theme.spacing.md};
  }
  
  .star {
    color: #fbbf24;
    font-size: ${theme.fontSize.lg};
  }
`;

const TrustBadges = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing['2xl']};
  margin-top: ${theme.spacing['3xl']};
  flex-wrap: wrap;
  
  .badge {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.lg};
    box-shadow: ${theme.shadows.sm};
    border: 1px solid ${theme.colors.gray[100]};
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    &:hover {
      transform: translateY(-3px);
      transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      box-shadow: ${theme.shadows.md};
    }
    
    .badge-icon {
      font-size: 1.5rem;
    }
    
    .badge-text {
      font-weight: 500;
      color: ${theme.colors.textPrimary};
    }
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.lg};
    
    .badge {
      padding: ${theme.spacing.sm} ${theme.spacing.md};
    }
  }
`;

const Reviews = () => {
  const stats = [
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '4.9', label: 'Average Rating', icon: '🏆' },
    { number: '500+', label: 'Healthcare Partners', icon: '🏥' },
    { number: '24/7', label: 'Support Available', icon: '🛡️' }
  ];

  const reviews = [
    {
      content: "HealthTalentHub's recruitment solutions have revolutionized our hospital's hiring process. The quality of candidates and efficiency improvements are remarkable.",
      name: "Dr. Sarah Johnson",
      title: "Chief Medical Officer",
      rating: 5,
      avatar: "SJ"
    },
    {
      content: "The platform has significantly enhanced our talent acquisition. Our hiring managers love the streamlined process and access to qualified healthcare professionals.",
      name: "Michael Chen",
      title: "HR Director",
      rating: 5,
      avatar: "MC"
    },
    {
      content: "Outstanding reliability and support. HealthTalentHub has been our trusted recruitment partner for over 5 years, and they continue to exceed our expectations.",
      name: "Dr. Emily Rodriguez",
      title: "Hospital Administrator",
      rating: 5,
      avatar: "ER"
    }
  ];

  const trustBadges = [
    { icon: '🏆', text: 'ISO Certified' },
    { icon: '🛡️', text: 'HIPAA Compliant' },
    { icon: '⭐', text: '10+ Years Experience' },
    { icon: '🏥', text: 'Healthcare Focused' }
  ];

  return (
    <ReviewsSection>
      <Container>
        <SectionHeader>
          <h2>Trusted by Healthcare Professionals</h2>
          <p>
            Join thousands of healthcare facilities worldwide who trust HealthTalentHub for their recruitment needs
          </p>
        </SectionHeader>

        <StatsRow>
          {stats.map((stat, index) => (
            <StatCard key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </StatCard>
          ))}
        </StatsRow>

        <ReviewsGrid>
          {reviews.map((review, index) => (
            <ReviewCard key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="rating">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <div className="review-content">
                "{review.content}"
              </div>
              <div className="reviewer-info">
                <div className="reviewer-avatar">
                  {review.avatar}
                </div>
                <div className="reviewer-details">
                  <div className="reviewer-name">{review.name}</div>
                  <div className="reviewer-title">{review.title}</div>
                </div>
              </div>
            </ReviewCard>
          ))}
        </ReviewsGrid>

        <TrustBadges>
          {trustBadges.map((badge, index) => (
            <div key={index} className="badge">
              <span className="badge-icon">{badge.icon}</span>
              <span className="badge-text">{badge.text}</span>
            </div>
          ))}
        </TrustBadges>
      </Container>
    </ReviewsSection>
  );
};

export default Reviews;
