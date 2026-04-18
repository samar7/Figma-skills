import { createTheme } from '@mui/material/styles';
import tokens from '../dist/tokens/js/tokens.mjs';

const mdColor = tokens.color.md;
const mdShape = tokens.shape.md.corner;
const mdType = tokens.type.md;

export const materialTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: mdColor.primary.value,
      contrastText: mdColor['on-primary'].value
    },
    secondary: {
      main: mdColor.secondary.value,
      contrastText: mdColor['on-secondary'].value
    },
    error: {
      main: mdColor.error.value,
      contrastText: mdColor['on-error'].value
    },
    background: {
      default: mdColor.background.value,
      paper: mdColor.surface.value
    },
    text: {
      primary: mdColor['on-surface'].value,
      secondary: mdColor['on-surface-variant'].value
    },
    divider: mdColor['outline-variant'].value
  },
  shape: {
    borderRadius: Number.parseInt(mdShape.small.value, 10)
  },
  typography: {
    fontFamily: mdType['font-family'].plain.value,
    body1: {
      fontSize: mdType.body.large['font-size'].value,
      lineHeight: mdType.body.large['line-height'].value,
      fontWeight: mdType.body.large['font-weight'].value
    },
    body2: {
      fontSize: mdType.body.medium['font-size'].value,
      lineHeight: mdType.body.medium['line-height'].value,
      fontWeight: mdType.body.medium['font-weight'].value
    },
    button: {
      fontSize: mdType.label.large['font-size'].value,
      lineHeight: mdType.label.large['line-height'].value,
      fontWeight: mdType.label.large['font-weight'].value,
      textTransform: 'none'
    },
    h5: {
      fontSize: mdType.headline.small['font-size'].value,
      lineHeight: mdType.headline.small['line-height'].value,
      fontWeight: mdType.headline.small['font-weight'].value
    },
    h6: {
      fontSize: mdType.title.large['font-size'].value,
      lineHeight: mdType.title.large['line-height'].value,
      fontWeight: mdType.title.large['font-weight'].value
    }
  }
});

export default materialTheme;
