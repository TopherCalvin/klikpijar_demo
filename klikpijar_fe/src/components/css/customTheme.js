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
    primary: { main: "#ce2039" },
    secondary: { main: "#fedf1a" },
  },
});
export default customTheme;
