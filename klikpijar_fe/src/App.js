import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import { ThemeProvider } from "@mui/material";
import customTheme from "./components/customTheme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
