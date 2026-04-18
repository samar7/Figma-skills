# Figma Skills

Material UI and design-system token setup for this project.

## Installed Packages

- `react`, `react-dom`, `@mui/material`, `@mui/icons-material`, `@emotion/react`, and `@emotion/styled` for Material UI components.
- `@fontsource/roboto` for the default Material Design typeface.
- `@material/material-color-utilities` for generating Material color systems when the palette needs to be expanded later.
- `style-dictionary` and `@tokens-studio/sd-transforms` for building design tokens from Tokens Studio-compatible JSON.

## Tokens

Edit source tokens in `tokens/material.tokens.json`.

Build token outputs:

```sh
npm run tokens:build
```

Generated outputs:

- `dist/tokens/css/variables.css`
- `dist/tokens/js/tokens.mjs`
- `dist/tokens/json/tokens.json`

## Material UI Theme

Use the generated tokens with the project theme:

```js
import '@fontsource/roboto/400.css';
import { ThemeProvider } from '@mui/material/styles';
import materialTheme from './src/material-theme.mjs';

export function App({ children }) {
  return <ThemeProvider theme={materialTheme}>{children}</ThemeProvider>;
}
```
