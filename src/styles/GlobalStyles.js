import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.primary};
    line-height: 1.6;
    color: ${theme.colors.textPrimary};
    background-color: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.secondary};
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: ${theme.spacing.md};
  }

  h1 {
    font-size: ${theme.fontSize['5xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize['4xl']};
    }
  }

  h2 {
    font-size: ${theme.fontSize['4xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize['3xl']};
    }
  }

  h3 {
    font-size: ${theme.fontSize['3xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize['2xl']};
    }
  }

  p {
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.textSecondary};
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.primaryDark};
    }
  }

  button {
    font-family: ${theme.fonts.primary};
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
    
    @media (max-width: ${theme.breakpoints.lg}) {
      max-width: 100%;
      padding: 0 ${theme.spacing.lg};
    }
  }

  .section {
    padding: ${theme.spacing['4xl']} 0;
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing['2xl']} 0;
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.lg};
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    outline: none;

    &--primary {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.primaryDark};
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.lg};
      }
    }

    &--secondary {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.secondaryDark};
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.lg};
      }
    }

    &--outline {
      background-color: transparent;
      color: ${theme.colors.primary};
      border: 2px solid ${theme.colors.primary};

      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }
  }

  .card {
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.xl};
    box-shadow: ${theme.shadows.md};
    padding: ${theme.spacing.xl};
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.xl};
    }
  }

  .grid {
    display: grid;
    gap: ${theme.spacing.xl};
    
    &--2 {
      grid-template-columns: repeat(2, 1fr);
      
      @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
      }
    }
    
    &--3 {
      grid-template-columns: repeat(3, 1fr);
      
      @media (max-width: ${theme.breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
      }
    }
    
    &--4 {
      grid-template-columns: repeat(4, 1fr);
      
      @media (max-width: ${theme.breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
      }
    }
  }

  .flex {
    display: flex;
    
    &--center {
      align-items: center;
      justify-content: center;
    }
    
    &--between {
      align-items: center;
      justify-content: space-between;
    }
    
    &--column {
      flex-direction: column;
    }
  }

  .text {
    &--center {
      text-align: center;
    }
    
    &--primary {
      color: ${theme.colors.primary};
    }
    
    &--secondary {
      color: ${theme.colors.secondary};
    }
    
    &--white {
      color: ${theme.colors.white};
    }
  }

  .bg {
    &--primary {
      background-color: ${theme.colors.primary};
    }
    
    &--secondary {
      background-color: ${theme.colors.secondary};
    }
    
    &--light {
      background-color: ${theme.colors.backgroundSecondary};
    }
    
    &--dark {
      background-color: ${theme.colors.backgroundDark};
    }
  }
`;

export default GlobalStyles;
