import React from "react";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { Box, Typography, Button } from "@mui/material";

const DataMasuk = () => {
  const data = [];
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1024px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            bgcolor: "#4c7c9e",
            borderRadius: "3px 3px 0 0",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box paddingLeft={"10px"}>Data masuk</Box>
        </Typography>
        <Box width={"100%"} display={"flex"} alignItems={"center"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            padding={"20px"}
          >
            <Button
              width={"100%"}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Box display={"flex"} width={"100%"} alignItems={"center"}>
                <EditCalendarIcon
                  sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  width={"100%"}
                  paddingLeft={"15px"}
                  fontWeight={"700"}
                  textTransform={"lowercase"}
                >
                  <Typography
                    textAlign={"left"}
                    textTransform={"capitalize"}
                    gutterBottom
                  >
                    Reservasi
                  </Typography>
                  <Typography textAlign={"left"} fontSize={"13px"} gutterBottom>
                    3611 reservasi
                  </Typography>
                  <Typography textAlign={"left"} fontSize={"13px"} gutterBottom>
                    99 terkonfirmasi
                  </Typography>
                </Box>
              </Box>
            </Button>
            <Button
              width={"100%"}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Box display={"flex"} width={"100%"} alignItems={"center"}>
                <EditCalendarIcon
                  sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  width={"100%"}
                  paddingLeft={"15px"}
                  fontWeight={"700"}
                  textTransform={"lowercase"}
                >
                  <Typography
                    textAlign={"left"}
                    textTransform={"capitalize"}
                    gutterBottom
                  >
                    Akupeduli
                  </Typography>
                  <Typography textAlign={"left"} fontSize={"13px"} gutterBottom>
                    27 klien
                  </Typography>
                  <Typography textAlign={"left"} fontSize={"13px"} gutterBottom>
                    31 pasangan/anak
                  </Typography>
                </Box>
              </Box>
            </Button>
            <Button
              width={"100%"}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Box display={"flex"} width={"100%"} alignItems={"center"}>
                <EditCalendarIcon
                  sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  width={"100%"}
                  paddingLeft={"15px"}
                  fontWeight={"700"}
                  textTransform={"lowercase"}
                >
                  <Typography
                    textAlign={"left"}
                    textTransform={"capitalize"}
                    gutterBottom
                  >
                    Skrining mandiri
                  </Typography>
                  <Typography textAlign={"left"} fontSize={"13px"} gutterBottom>
                    11 pemohon
                  </Typography>
                  <Typography textAlign={"left"} fontSize={"13px"} gutterBottom>
                    40 kit
                  </Typography>
                </Box>
              </Box>
            </Button>
            <Button
              width={"100%"}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Box display={"flex"} width={"100%"} alignItems={"center"}>
                <EditCalendarIcon
                  sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  width={"100%"}
                  paddingLeft={"15px"}
                  fontWeight={"700"}
                  textTransform={"lowercase"}
                >
                  <Typography
                    textAlign={"left"}
                    textTransform={"capitalize"}
                    gutterBottom
                  >
                    Info Prep
                  </Typography>
                  <Typography textAlign={"left"} fontSize={"13px"} gutterBottom>
                    0 via CSO
                  </Typography>
                  <Typography textAlign={"left"} fontSize={"13px"} gutterBottom>
                    0 via PKM
                  </Typography>
                </Box>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DataMasuk;
