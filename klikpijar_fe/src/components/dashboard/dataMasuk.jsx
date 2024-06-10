import React from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const DataMasuk = () => {
  const sm = useMediaQuery("(min-width: 450px)");
  const theme = useTheme();
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
            borderRadius: "6px 6px 0 0",
            color: "#2A363B",
            display: "flex",
            alignItems: "center",
          }}
          bgcolor={theme.palette.primary.main}
        >
          <Box paddingLeft={"10px"}>Data masuk</Box>
        </Typography>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={sm ? "row" : "column"}
          alignItems={sm ? "baseline" : "center"}
          bgcolor={"#ffffff"}
          borderRadius="0 0 6px 6px"
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            padding={` ${sm ? "20px 20px 20px 0" : "0"}`}
          >
            <Button
              width={"100%"}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                color: "black",
              }}
            >
              <Box display={"flex"} width={"100%"} alignItems={"center"}>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    bgcolor: "#fff2d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  color={theme.palette.secondary.main}
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
                    Reservasi Tes HIV
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
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                color: "black",
              }}
            >
              <Box display={"flex"} width={"100%"} alignItems={"center"}>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    bgcolor: "#fff2d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  color={theme.palette.secondary.main}
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
                    Reservasi Refill ARV
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
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                color: "black",
              }}
            >
              <Box display={"flex"} width={"100%"} alignItems={"center"}>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    bgcolor: "#fff2d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  color={theme.palette.secondary.main}
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
                    Notifikasi Pasangan
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
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                color: "black",
              }}
            >
              <Box display={"flex"} width={"100%"} alignItems={"center"}>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    bgcolor: "#fff2d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  color={theme.palette.secondary.main}
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
                    Reservasi SHBK/CBS
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
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                color: "black",
              }}
            >
              <Box display={"flex"} width={"100%"} alignItems={"center"}>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    bgcolor: "#fff2d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  color={theme.palette.secondary.main}
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
                    Reservasi Prep
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
