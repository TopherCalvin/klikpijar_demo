import { Box } from "@mui/material";
import Button from "@mui/material/Button";
const Home = () => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"150px"}
      alignContent={"center"}
      justifyContent={"center"}
      color={"white"}
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
            xxl: "1320px",
          },
        }}
      >
        abc
      </Box>
    </Box>
  );
};

export default Home;
