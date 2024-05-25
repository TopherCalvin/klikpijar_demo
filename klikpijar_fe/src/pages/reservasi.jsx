import { Box, Toolbar, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const mockDataReservasi = [
  {
    id: 1,
    camCode: "Jon Snow",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    age: 35,
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    phone: "(665)121-5454",
    email: "cerseilannister@gmail.com",
    tanggalReservasi: "22-05-2024",
  },
  {
    id: 2,
    camCode: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
    age: 42,
    phone: "(421)314-2288",
  },
  {
    id: 3,
    camCode: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
    age: 45,
    phone: "(422)982-6739",
  },
  {
    id: 4,
    camCode: "Anya Stark",
    email: "anyastark@gmail.com",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
    age: 16,
    phone: "(921)425-6742",
  },
  {
    id: 5,
    camCode: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
  },
  {
    id: 6,
    camCode: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
  },
  {
    id: 7,
    camCode: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
  },
  {
    id: 8,
    camCode: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
  },
  {
    id: 9,
    camCode: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
  },
];

const Reservasi = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
  };
  const columns = [
    { field: "id", headerName: "No.", flex: 0.5 },
    { field: "camCode", headerName: "Cam Code", flex: 1 },
    { field: "layanan", headerName: "Layanan Yang Dipilih", flex: 1 },
    { field: "janjiTemu", headerName: "Janji Temu Untuk", flex: 1 },
    { field: "age", headerName: "Umur", flex: 1 },
    {
      field: "kelamin",
      headerName: "Mengidentifikasi dirinya sebagai",
      flex: 1,
    },
    { field: "jadwal", headerName: "Jadwal Reservasi", flex: 1 },
    { field: "UIC", headerName: "UIC", flex: 1 },
    { field: "NIKBPJS", headerName: "NIK/BPJS", flex: 1 },
    { field: "Antrian", headerName: "No. Antri", flex: 0.5 },
    { field: "puskesmas", headerName: "Puskesmas", flex: 1 },
    { field: "hadir", headerName: "Hadir", flex: 1 },
    { field: "hasilTes", headerName: "Hasil Tes", flex: 1 },
    { field: "inisiasiARV", headerName: "Inisiasi ARV", flex: 1 },
    { field: "phone", headerName: "HP/WA", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "tanggalReservasi",
      headerName: "Tanggal submit Reservasi",
      flex: 1,
    },
  ];

  useEffect(() => {
    console.log(selectedRows);
  }, [selectedRows]);
  return (
    <Box
      m="40px 0 0 0"
      paddingTop={"100px"}
      height="75vh"
      sx={{
        "& .MuiDataGrid-columnHeader": {
          fontWeight: "700 !important",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: "#ffffff",
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: "#ffffff",
        },
        "& .MuiCheckbox-root": {
          color: `black !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `green !important`,
        },
      }}
    >
      <DataGrid
        checkboxSelection
        rows={mockDataReservasi}
        columns={columns}
        components={{ Toolbar: <GridToolbarQuickFilter /> }}
        onSelectionModelChange={handleSelectionChange}
        selectionModel={selectedRows}
      />
    </Box>
  );
};

export default Reservasi;
