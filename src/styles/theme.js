// Centralized color scheme for Medirex clone - Bright Medical Theme
export const theme = {
  colors: {
    // Primary colors - Bright Medical Blue
    primary: '#3b82f6', // Bright blue
    primaryLight: '#60a5fa', // Lighter bright blue
    primaryDark: '#2563eb', // Darker bright blue
    primaryGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    
    // Secondary colors - Bright Teal
    secondary: '#06b6d4', // Bright teal
    secondaryLight: '#22d3ee', // Light bright teal
    secondaryDark: '#0891b2', // Dark bright teal
    secondaryGradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    
    // Accent colors - Bright accents
    accent: '#ef4444', // Bright red for alerts
    accentLight: '#f87171', // Light bright red
    accentDark: '#dc2626', // Dark bright red
    accentGradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    
    // Medical-specific colors - Bright palette
    medicalBlue: '#3b82f6', // Bright medical blue
    medicalTeal: '#06b6d4', // Bright teal
    medicalRed: '#ef4444', // Bright medical red
    medicalOrange: '#f97316', // Bright medical orange
    medicalGreen: '#10b981', // Bright medical green
    medicalIndigo: '#6366f1', // Bright medical indigo
    
    // Additional bright colors
    teal: '#06b6d4', // Bright teal
    tealLight: '#22d3ee',
    tealDark: '#0891b2',
    tealGradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    
    orange: '#f97316', // Bright orange
    orangeLight: '#fb923c',
    orangeDark: '#ea580c',
    orangeGradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    
    green: '#10b981', // Bright green
    greenLight: '#34d399',
    greenDark: '#059669',
    greenGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    
    indigo: '#6366f1', // Bright indigo
    indigoLight: '#818cf8',
    indigoDark: '#4f46e5',
    indigoGradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
    
    // Modern neutral colors
    white: '#ffffff',
    black: '#000000',
    gray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    
    // Background colors - Bright clean backgrounds
    background: '#ffffff',
    backgroundSecondary: '#f8fafc',
    backgroundDark: '#0f172a',
    backgroundMedical: '#f0f9ff', // Light medical blue background
    backgroundGradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
    
    // Text colors - Professional typography
    textPrimary: '#1e293b',
    textSecondary: '#475569',
    textLight: '#64748b',
    textWhite: '#ffffff',
    textMedical: '#3b82f6', // Medical blue text
    
    // Status colors - Bright status indicators
    success: '#10b981', // Bright green for success
    warning: '#f97316', // Bright orange for warning
    error: '#ef4444', // Bright red for error
    info: '#3b82f6', // Bright blue for info
    
    // Modern highlight colors
    highlight: '#dbeafe', // Light medical blue for highlights
    highlightText: '#3b82f6', // Medical blue for highlight text
    
    // Glass morphism colors
    glass: 'rgba(255, 255, 255, 0.1)',
    glassDark: 'rgba(0, 0, 0, 0.1)',
    glassMedical: 'rgba(59, 130, 246, 0.1)', // Medical blue glass
    
    // Gradient combinations - Bright medical themed
    gradients: {
      primary: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      secondary: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      accent: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      medical: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
      teal: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      orange: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
      green: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      indigo: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      healthcare: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #6366f1 100%)',
      trust: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
      innovation: 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
      safety: 'linear-gradient(135deg, #10b981 0%, #f97316 100%)',
      modern: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
      vibrant: 'linear-gradient(135deg, #f97316 0%, #3373F1 50%, #ef4444 100%)',
      bright: 'linear-gradient(135deg, #06b6d4 0%, #f97316 50%, #10b981 100%)',
    }
  },
  
  // Typography
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    secondary: "'Poppins', sans-serif",
  },
  
  // Font sizes
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Bright shadows with medical colors
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    medical: '0 10px 25px -5px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.1)',
    medicalTeal: '0 10px 25px -5px rgba(6, 182, 212, 0.3), 0 4px 6px -2px rgba(6, 182, 212, 0.1)',
    modern: '0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.1)',
  },
  
  // Border radius
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
};

export default theme;
