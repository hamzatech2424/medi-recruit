# Medirex Clone - React.js Website

A fully responsive React.js website inspired by [Medirex](https://medirex.com/), featuring modern design, centralized color scheme, and healthcare technology focus.

## 🚀 Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Centralized Color Scheme** - All colors and design tokens in one theme file
- **Modern UI Components** - Built with styled-components for maintainable CSS-in-JS
- **React Router** - Client-side routing for smooth navigation
- **Healthcare Focus** - Patient identification solutions and hospital technology
- **Accessible Design** - Following web accessibility best practices

## 🎨 Design System

The website uses a centralized theme system located in `src/styles/theme.js` with:

- **Color Palette**: Primary blues, secondary greens, and neutral grays
- **Typography**: Inter and Poppins fonts for modern readability
- **Spacing**: Consistent spacing scale for layout harmony
- **Breakpoints**: Responsive breakpoints for all device sizes
- **Shadows & Borders**: Subtle shadows and rounded corners for depth

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/          # Navigation component
│   ├── Hero/           # Main banner section
│   ├── Features/       # Product showcase
│   └── Footer/         # Site footer
├── styles/
│   ├── theme.js        # Centralized design tokens
│   └── GlobalStyles.js # Global CSS styles
└── App.js              # Main application component
```

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **Google Fonts** - Inter & Poppins typography

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd medi-recruit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Components

### Header
- Fixed navigation with dropdown menus
- Mobile hamburger menu
- Smooth hover animations

### Hero Section
- Gradient background with overlay pattern
- Call-to-action buttons
- Statistics showcase
- Responsive image layout

### Features Section
- Product cards with hover effects
- Icon-based feature highlights
- Grid layout that adapts to screen size

### Footer
- Multi-column layout with company info
- Contact details and social links
- Organized link sections

## 🎨 Customization

### Colors
Edit `src/styles/theme.js` to modify the color scheme:

```javascript
colors: {
  primary: '#1e3a8a',      // Main brand color
  secondary: '#059669',    // Secondary brand color
  // ... more colors
}
```

### Typography
Change fonts in the theme file:

```javascript
fonts: {
  primary: "'Inter', sans-serif",
  secondary: "'Poppins', sans-serif",
}
```

### Spacing
Adjust spacing scale:

```javascript
spacing: {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  // ... more spacing values
}
```

## 📄 Pages

The website includes routes for:
- Home page with hero and features
- About Us (placeholder)
- Contact (placeholder)
- Product pages (placeholders)
- All footer links (placeholders)

## 🔧 Development

### Adding New Components

1. Create a new folder in `src/components/`
2. Create your component file with styled-components
3. Import the theme: `import { theme } from '../../styles/theme'`
4. Use theme values for consistent styling

### Adding New Pages

1. Create a new component
2. Add a route in `App.js`
3. Update navigation links if needed

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on different screen sizes
5. Submit a pull request

## 📄 License

This project is for educational purposes and is inspired by the Medirex website design.

## 🙏 Acknowledgments

- Design inspiration from [Medirex](https://medirex.com/)
- Icons from emoji and Unicode characters
- Images from Unsplash for placeholder content

---

**Note**: This is a clone/educational project. All product names, trademarks, and company information are used for demonstration purposes only.
