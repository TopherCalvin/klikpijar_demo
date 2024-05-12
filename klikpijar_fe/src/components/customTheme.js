import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
  palette: {
    primary: { main: "#fffff" },
    secondary: { main: "#4c7c9e" },
    tertiary: { main: "#2BAAB1" },
    quaternary: { main: "#383f48" },
  },
});
export default customTheme;
