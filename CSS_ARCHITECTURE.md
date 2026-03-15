# CSS Architecture Guide

## Overview
The portfolio's styles have been separated into component-specific CSS files for better readability, maintainability, and accessibility.

## File Structure

```
src/
├── styles/
│   ├── global.css          # Global reset, fonts, and CSS variables
│   ├── header.css          # Header and navigation styles
│   ├── home.css            # Hero/home section styles
│   ├── about.css           # About section styles
│   ├── projects.css        # Projects section and card styles
│   ├── services.css        # Services section and cards
│   ├── contact.css         # Contact form and footer styles
│   └── responsive.css      # All media query breakpoints
```

## File Descriptions

### global.css
- Font imports and @font-face declarations
- CSS reset rules
- Root CSS variables (colors, fonts, padding)
- Body and base element styles
- Base #main container

### header.css
- Header (#header) and navigation (#navbar) styles
- Animated text letter effects
- Mobile hamburger menu toggle
- Logo and navigation link styling

### home.css
- Hero section (#home) full viewport height
- Profile image positioning and styling
- Hero content layout
- Title and subtitle formatting
- Bounding animations setup

### about.css
- About section (.second-section) layout
- Section tag positioning
- Intro text and highlighting
- Button styles (.btn-primary, .btn-secondary)
- Container styling and text alignment

### projects.css
- Projects section layout
- Project cards styling and animations
- Card hover effects and transitions
- Card content and descriptions
- Project links and metadata display

### services.css
- Services section layout
- Service cards (design, development, website)
- Card content organization
- Service counter and description styling
- Profile image pinning state

### contact.css
- Contact section and footer layout
- Contact form styling (grid layout)
- Input and textarea focus states
- Floating label behavior
- Submit button styling
- Social links and footer navigation
- Contact information sidebar

### responsive.css
- All media query breakpoints (@media rules)
- Mobile-specific styles (480px and below)
- Tablet adjustments (568px - 768px)
- Medium screen adaptations (720px - 900px)
- Large screen tweaks (1230px+)
- Form layout changes for different screen sizes

## Benefits of This Structure

1. **Better Organization**: Each component has its own dedicated CSS file
2. **Easier Maintenance**: Find and update styles for specific components quickly
3. **Improved Readability**: Less context switching between different sections
4. **Scalability**: Easy to add new components by creating new CSS files
5. **Collaboration**: Multiple developers can work on different sections without conflicts
6. **Performance**: CSS can be lazy-loaded or served conditionally if needed
7. **Accessibility**: Clear separation makes it easier to focus on accessibility for each component

## How Styles Are Imported

All CSS files are imported in `src/main.jsx`:

```javascript
import "./styles/global.css";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/projects.css";
import "./styles/services.css";
import "./styles/contact.css";
import "./styles/responsive.css";
```

## Adding New Styles

When adding new features or components:

1. Create a new CSS file in `src/styles/` (e.g., `src/styles/newComponent.css`)
2. Add your component-specific styles in this file
3. Import it in `src/main.jsx` in the appropriate order (before `responsive.css`)
4. Add responsive rules for your component in `responsive.css`

## CSS Variables Available

All variables defined in `global.css` root selector are available throughout:

```css
--senary-color: #4d4d66;
--text-color: #ffffff;
--background-color: #131313;
--font-family-primary: "Poppins", sans-serif;
--font-family-secondary: "Red-Hat-Display", sans-serif;
--font-family-tertiary: "bold-mango", sans-serif;
--font-family-mango: "light-mango", sans-serif;
--font-family-mono: "geist-mono", monospace;
--mobile-horizontal-padding: 5%;
--default-horizontal-padding: 7.5%;
--minWidth2000-horizontal-padding: 15%;
--minWidth2500-horizontal-padding: 25%;
```

Use these variables to maintain consistency across components.

## Accessibility Improvements

- Clear hierarchy makes it easier to track focus states
- Separated responsive styles make mobile accessibility testing easier
- Color variables help ensure contrast compliance
- Component-based structure encourages ARIA attribute organization
