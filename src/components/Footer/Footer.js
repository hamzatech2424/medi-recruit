import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaYoutube, 
  FaFacebook, 
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';
import { theme } from '../../styles/theme';

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
    padding: ${theme.spacing['2xl']} 0 ${theme.spacing.xl};
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  position: relative;
  z-index: 2;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    padding: 0 ${theme.spacing.lg};
  }
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${theme.spacing['2xl']};
  margin-bottom: ${theme.spacing['3xl']};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.xl};
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
    margin-bottom: ${theme.spacing.lg};
    color: ${theme.colors.white};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 30px;
      height: 2px;
      background: ${theme.colors.gradients.primary};
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: ${theme.spacing.sm};
  }
  
  a {
    color: ${theme.colors.gray[300]};
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: ${theme.fontSize.sm};
    padding: ${theme.spacing.xs} 0;
    display: block;
    
    &:hover {
      color: ${theme.colors.white};
      transform: translateX(4px);
    }
  }
`;

const CompanyInfo = styled.div`
  h3 {
    font-size: ${theme.fontSize['2xl']};
    font-weight: 700;
    margin-bottom: ${theme.spacing.lg};
    background: ${theme.colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    &::after {
      background: ${theme.colors.gradients.secondary};
    }
  }
  
  p {
    color: ${theme.colors.gray[300]};
    line-height: 1.6;
    margin-bottom: ${theme.spacing.lg};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: ${theme.spacing.sm};
    color: ${theme.colors.gray[300]};
    font-size: ${theme.fontSize.sm};
    padding: ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.md};
    transition: all 0.3s ease;
    
    &:hover {
      background: ${theme.colors.glassMedical};
      color: ${theme.colors.white};
      transform: translateX(4px);
    }
    
    .icon {
      width: 16px;
      height: 16px;
      color: ${theme.colors.primaryLight};
      flex-shrink: 0;
      margin-top: 2px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: ${theme.colors.gradients.primary};
    border-radius: ${theme.borderRadius.full};
    color: ${theme.colors.white};
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: ${theme.shadows.medical};
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: ${theme.colors.gradients.secondary};
      transition: left 0.3s ease;
      z-index: 1;
    }
    
    svg {
      position: relative;
      z-index: 2;
      width: 20px;
      height: 20px;
      transition: transform 0.3s ease;
    }
    
    &:hover {
      transform: translateY(-3px) scale(1.1);
      box-shadow: ${theme.shadows.medicalTeal};
      
      &::before {
        left: 0;
      }
      
      svg {
        transform: rotate(360deg);
      }
    }
    
    &:active {
      transform: translateY(-1px) scale(1.05);
    }
  }
  
  .linkedin:hover {
    background: #0077b5;
  }
  
  .twitter:hover {
    background: #1DA1F2;
  }
  
  .youtube:hover {
    background: #FF0000;
  }
  
  .facebook:hover {
    background: #4267B2;
  }
  
  .instagram:hover {
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${theme.colors.gray[700]};
  padding-top: ${theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    text-align: center;
  }
  
  p {
    color: ${theme.colors.gray[400]};
    font-size: ${theme.fontSize.sm};
    margin: 0;
  }
  
  .footer-links {
    display: flex;
    gap: ${theme.spacing.lg};
    
    @media (max-width: ${theme.breakpoints.md}) {
      gap: ${theme.spacing.md};
    }
    
    a {
      color: ${theme.colors.gray[400]};
      text-decoration: none;
      font-size: ${theme.fontSize.sm};
      transition: all 0.3s ease;
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      border-radius: ${theme.borderRadius.md};
      
      &:hover {
        color: ${theme.colors.white};
        background: ${theme.colors.glassMedical};
      }
    }
  }
`;

const Footer = () => {
  const footerSections = [
    {
      title: 'SOLUTIONS',
      links: [
        { name: 'Patient Identification', to: '/patient-identification' },
        { name: 'Hospital Wristbands', to: '/wristbands' },
        { name: 'Medical Labels', to: '/labels' },
        { name: 'mySPOT Platform', to: '/myspot' },
        { name: 'Healthcare Analytics', to: '/analytics' },
        { name: 'Custom Solutions', to: '/custom' }
      ]
    },
    {
      title: 'RESOURCES',
      links: [
        { name: 'Case Studies', to: '/case-studies' },
        { name: 'White Papers', to: '/white-papers' },
        { name: 'Product Brochures', to: '/brochures' },
        { name: 'Implementation Guide', to: '/implementation' },
        { name: 'Support Center', to: '/support' },
        { name: 'Training Programs', to: '/training' }
      ]
    },
    {
      title: 'COMPANY',
      links: [
        { name: 'About Medirex', to: '/about' },
        { name: 'Leadership Team', to: '/leadership' },
        { name: 'Careers', to: '/careers' },
        { name: 'News & Events', to: '/news' },
        { name: 'Partnerships', to: '/partnerships' },
        { name: 'Contact Us', to: '/contact' }
      ]
    }
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <CompanyInfo>
            <h3>Medirex Systems Inc.</h3>
            <p>
              Leading the future of patient identification technology with innovative solutions 
              that enhance healthcare safety, efficiency, and patient engagement. Trusted by 
              healthcare facilities worldwide for over 50 years.
            </p>
            <ContactInfo>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <span>18 King Street East, Suite 1400<br />Toronto, ON, Canada M5C 1C4</span>
              </div>
              <div className="contact-item">
                <FaPhone className="icon" />
                <span>416.363.9313<br />1.800.387.9848</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <span>info@medirex.com</span>
              </div>
              <div className="contact-item">
                <FaClock className="icon" />
                <span>24/7 Support Available</span>
              </div>
            </ContactInfo>
            <SocialLinks>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Follow us on LinkedIn"
                className="linkedin"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Follow us on Twitter"
                className="twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Subscribe to our YouTube channel"
                className="youtube"
              >
                <FaYoutube />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Like us on Facebook"
                className="facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Follow us on Instagram"
                className="instagram"
              >
                <FaInstagram />
              </a>
            </SocialLinks>
          </CompanyInfo>
          
          {footerSections.map((section, index) => (
            <FooterSection key={index}>
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.to}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          ))}
        </FooterTop>
        
        <FooterBottom>
          <p>© 2024 Medirex Systems Inc. All rights reserved. | ISO 13485 Certified | HIPAA Compliant</p>
          <div className="footer-links">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
