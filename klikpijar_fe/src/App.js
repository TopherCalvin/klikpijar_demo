import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { ThemeProvider } from "@mui/material";
import customTheme from "./components/css/customTheme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
