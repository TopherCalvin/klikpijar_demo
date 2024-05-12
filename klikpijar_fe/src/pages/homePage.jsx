import {
  AppBar,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import klikpijar from "../assets/logo-default-slim.png";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xl"));
  const logoHeight = isSmallScreen ? 80 : 114;
  return (
    <AppBar position="sticky">
      <Box
        display={"flex"}
        width={"100%"}
        height={"150px"}
        alignContent={"center"}
        justifyContent={"center"}
        color={theme.palette.secondary.main}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: {
              xs: "100%",
              sm: "540px",
              md: "720px",
              lg: "960px",
              xl: "1140px",
            },
          }}
        >
          <Box height={"100%"}>
            <IconButton href="/">
              <img alt="Klikpijar" src={klikpijar} height={logoHeight} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Home;
