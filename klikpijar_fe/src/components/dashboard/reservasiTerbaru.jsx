import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography, useMediaQuery } from "@mui/material";

const ReservasiTerbaru = () => {
  const sm = useMediaQuery("(min-width: 450px)");
  const data = [
    { tanggal: "Kolom data tidak ditemukan", camCode: "3171795" },
    { tanggal: "Kolom data tidak ditemukan", camCode: "3171795" },
    { tanggal: "Kolom data tidak ditemukan", camCode: "1106018" },
    { tanggal: "Kolom data tidak ditemukan", camCode: "3171795" },
    { tanggal: "Kolom data tidak ditemukan", camCode: "3171795" },
  ];

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
          padding: sm ? "15px" : "0",
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
          <Box paddingLeft={"10px"}>Reservasi Terbaru</Box>
        </Typography>
        <TableContainer component={Paper} sx={{ overflow: "auto" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Tanggal</TableCell>
                <TableCell>Cam code</TableCell>
                <TableCell>Rescode</TableCell>
                <TableCell>Layanan</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length ? (
                data?.map((row, idx) => (
                  <TableRow key={row.camCode}>
                    <TableCell component="th" scope="row">
                      {idx + 1}
                    </TableCell>
                    <TableCell>{row.tanggal}</TableCell>
                    <TableCell>{row.camCode}</TableCell>
                    <TableCell>{row?.rescode}</TableCell>
                    <TableCell>{row?.layanan}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} component="th" scope="row">
                    Belum tersedia data
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ReservasiTerbaru;
