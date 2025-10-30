import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';
import { PaletteColorOptions } from '@mui/material/styles/createPalette';

// PESTEL Color Scheme
export interface PestelColors {
  political: string;
  economic: string;
  social: string;
  technological: string;
  environmental: string;
  legal: string;
}

export const pestelColors: PestelColors = {
  // Political (Blue)
  political: '#1976d2',
  // Economic (Green)
  economic: '#2e7d32',
  // Social (Purple)
  social: '#7b1fa2',
  // Technological (Orange)
  technological: '#ed6c02',
  // Environmental (Teal)
  environmental: '#00796b',
  // Legal (Red)
  legal: '#d32f2f',
};

// Create a theme instance
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: pestelColors.political,
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: pestelColors.environmental,
      light: '#26a69a',
      dark: '#00796b',
      contrastText: '#fff',
    },
    error: {
      main: pestelColors.legal,
      light: '#ef5350',
      dark: '#c62828',
    },
    warning: {
      main: pestelColors.technological,
      light: '#ff9800',
      dark: '#e65100',
    },
    info: {
      main: pestelColors.technological,
      light: '#29b6f6',
      dark: '#0288d1',
    },
    success: {
      main: pestelColors.economic,
      light: '#4caf50',
      dark: '#2e7d32',
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.1rem',
      lineHeight: 1.2,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px 0 rgba(0,0,0,0.05)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px 0 rgba(0,0,0,0.1)',
          },
        },
      },
    },
  },
});

// Enable responsive font sizes
theme = responsiveFontSizes(theme);

export default theme;
