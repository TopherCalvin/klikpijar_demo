import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useMediaQuery } from "@mui/material";
import { useFetchProvince } from "../../hooks/useFetchProvince";

const DataViewNotifikasiPasangan = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const { province, fetch } = useFetchProvince();
  console.log(province.data);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Nama</TableCell>
            <TableCell>Terakhir Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {province.data?.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataViewNotifikasiPasangan;
