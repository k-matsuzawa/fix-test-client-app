import { createTheme } from '@mui/material/styles'

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: [
      '"Noto Sans JP"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    htmlFontSize: 14,
    // headline
    h1: {
      fontSize: '24px',
      lineHeight: '35.52px',
      fontWeight: 400,
      fontStyle: 'normal'
    },
    // title
    h2: {
      fontSize: '20px',
      lineHeight: '29.6px',
      fontWeight: 400,
      fontStyle: 'normal'
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: '25.6px',
      fontWeight: 400,
      fontStyle: 'normal'
    },
    subtitle2: {
      fontSize: '14px',
      lineHeight: '22.4px',
      fontWeight: 400,
      fontStyle: 'normal'
    },
    body1: {
      fontSize: '16px',
      lineHeight: '25.6px',
      fontWeight: 400,
      fontStyle: 'normal'
    },
    body2: {
      fontSize: '14px',
      lineHeight: '22.4px',
      fontWeight: 400,
      fontStyle: 'normal'
    },
    caption: {
      fontSize: '12px',
      lineHeight: '19.2px',
      fontWeight: 400,
      fontStyle: 'normal'
    },
    button: {
      fontSize: '14px',
      lineHeight: '22.4px',
      fontWeight: 400,
      fontStyle: 'normal',
      letterSpacing: '2%'
    }
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          border: '1px solid #ECEBEF',
          borderRadius: '8px',
          height: '48px',
          padding: '12px 16px',
          fontSize: '14px',
          lineHeight: '22.4px',
          fontWeight: 400,
          fontStyle: 'normal',
          '&:placeholder': {
            color: '#8C879C'
          },
        }
      }
    }
  }
})
