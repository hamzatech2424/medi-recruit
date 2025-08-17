import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../../styles/theme';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${theme.colors.gray[200]};
  z-index: 1000;
  box-shadow: ${theme.shadows.modern};
  transition: all 0.3s ease;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    padding: 0 ${theme.spacing.lg};
  }
`;

const Logo = styled(Link)`
  font-size: ${theme.fontSize['2xl']};
  font-weight: 700;
  text-decoration: none;
  background: ${theme.colors.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.textPrimary};
  font-weight: 500;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background: ${theme.colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateY(-2px);
  }
  
  &.active {
    background: ${theme.colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: ${theme.colors.gradients.primary};
      border-radius: ${theme.borderRadius.full};
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: ${theme.fontSize.xl};
  cursor: pointer;
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.3s ease;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
  
  &:hover {
    background: ${theme.colors.gray[100]};
    color: ${theme.colors.primary};
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-top: 1px solid ${theme.colors.gray[200]};
  box-shadow: ${theme.shadows.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  text-decoration: none;
  color: ${theme.colors.textPrimary};
  font-weight: 500;
  border-bottom: 1px solid ${theme.colors.gray[100]};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.gray[50]};
    color: ${theme.colors.primary};
    padding-left: ${theme.spacing['2xl']};
  }
  
  &.active {
    background: ${theme.colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/" onClick={closeMobileMenu}>
          Medirex
        </Logo>
        
        <Nav>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={isActive(item.path) ? 'active' : ''}
            >
              {item.label}
            </NavLink>
          ))}
        </Nav>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </HeaderContent>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        {navItems.map((item) => (
          <MobileNavLink
            key={item.path}
            to={item.path}
            className={isActive(item.path) ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
