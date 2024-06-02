import React from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

const DataMasuk = () => {
  const sm = useMediaQuery("(min-width: 450px)");
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
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={sm ? "row" : "column"}
          alignItems={"center"}
          bgcolor={"#ffffff"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            padding={` ${sm ? "20px 20px 20px 0" : "0"}`}
          >
            <Button
              width={"100%"}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Box display={"flex"} width={"100%"} alignItems={"center"}>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    color: "#1dc9b7",
                    bgcolor: "#d6e1e9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EditCalendarIcon
                    sx={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </Box>
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
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    color: "#fd397a",
                    bgcolor: "#d6e1e9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FileCopyIcon
                    sx={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </Box>
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
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            padding={`${sm ? "20px 20px 20px 0" : "0"}`}
          >
            <Button
              width={"100%"}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Box display={"flex"} width={"100%"} alignItems={"center"}>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    color: "#fd397a",
                    bgcolor: "#d6e1e9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FileCopyIcon
                    sx={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </Box>
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
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    color: "#ffb822",
                    bgcolor: "#d6e1e9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CalendarTodayOutlinedIcon
                    sx={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </Box>
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
