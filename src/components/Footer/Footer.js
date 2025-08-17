import React from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaLinkedin, 
  FaInstagram,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
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
    transform: scale(1.05);
  }
`;

const FooterContainer = styled.footer`
  background: ${theme.colors.backgroundDark};
  color: ${theme.colors.white};
  padding: ${theme.spacing['4xl']} 0 ${theme.spacing.xl};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: ${theme.colors.gradients.medical};
    opacity: 0.1;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['3xl']} 0 ${theme.spacing.lg};
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  position: relative;
  z-index: 2;
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing['3xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  
  .icon {
    font-size: 1.5rem;
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.primary};
    animation: ${float} 3s ease-in-out infinite;
  }
  
  h3 {
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.white};
  }
  
  p, a {
    color: ${theme.colors.gray[300]};
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: ${theme.fontSize.base};
    
    &:hover {
      color: ${theme.colors.white};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: ${theme.colors.white};
    font-size: 1.2rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: ${fadeInUp} 0.8s ease-out 0.2s both;
    
    &:hover {
      background: ${theme.colors.primary};
      transform: translateY(-5px) scale(1.1);
      box-shadow: 0 10px 25px rgba(30, 58, 138, 0.4);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${theme.colors.gray[400]};
  font-size: ${theme.fontSize.sm};
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <ContactGrid>
          <ContactCard>
            <div className="icon">
              <FaPhone />
            </div>
            <h3>Phone</h3>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </ContactCard>
          
          <ContactCard>
            <div className="icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <a href="mailto:info@healthtalenthub.co.uk">info@healthtalenthub.co.uk</a>
          </ContactCard>
        </ContactGrid>
        
        <SocialLinks>
          <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </SocialLinks>
        
        <Copyright>
          © 2024 HealthTalentHub. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
