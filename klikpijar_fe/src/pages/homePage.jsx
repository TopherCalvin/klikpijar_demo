import { AppBar, Box, Button, IconButton, useTheme } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import klikpijar from "../assets/logo-default-slim.png";
import "../css/home.css";

const Home = () => {
  const theme = useTheme();
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
          <Box height={"114px"} width={"305px"}>
            <IconButton href="/" disableRipple>
              <img
                className="logo-transition"
                alt="Klikpijar"
                src={klikpijar}
              />
            </IconButton>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            height={"100%"}
            width={"100%"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              height={"50%"}
              gap={"20px"}
            >
              <Button
                size="small"
                className="about-us"
                disableRipple
                sx={{ color: "#afaca9" }}
              >
                <Box
                  className="right-arrow"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <ChevronRightIcon fontSize="" />
                </Box>
                Tentang Kami
              </Button>
              <SearchIcon sx={{ color: "black", fontSize: "20px" }} />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              height={"50%"}
            ></Box>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Home;
