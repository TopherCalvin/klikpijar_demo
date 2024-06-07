import { useFetchPuskes } from "../hooks/useFetchPuskes";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, Typography, Button, Box } from "@mui/material";

const AddEditFasyankes = () => {
  const md = useMediaQuery("(min-width: 1024px)");
  const sm = useMediaQuery("(min-width: 676px)");

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "15px",
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{
              width: "100%",
              height: "50px",
              display: "flex",
              bgcolor: "#4c7c9e",
              borderRadius: "3px 3px 0 0",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box paddingLeft={"10px"}>{`${
              false ? "Tambah" : "Rubah"
            } Fasyankes/Klinik`}</Box>
            <Box sx={{ paddingRight: "10px" }}>
              <Button
                onClick={() => {
                  console.log("a");
                }}
                sx={{
                  color: "white",
                  bgcolor: "#1ec8b7",
                  textTransform: "none",
                }}
                variant="outlined"
              >
                <MenuIcon sx={{ paddingRight: "5px" }} /> Lihat Data
              </Button>
            </Box>
          </Typography>
        </Box>
        <Box width={"100%"} maxWidth={"90%"}></Box>
      </Box>
    </>
  );
};

export default AddEditFasyankes;
