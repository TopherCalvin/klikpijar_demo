import { AddBox, ArrowDownward, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";
import TableViewIcon from "@mui/icons-material/TableView";

const Data = [
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
  const [mockDataReservasi, setMockDataReservasi] = useState(
    Data.map((val, idx) => {
      return { No: idx + 1, ...val };
    })
  );

  const handleCreateReservation = () => {
    // Create new reservation logic
    console.log("Create new reservation");
  };

  const handleEditReservation = (row) => {
    // Edit selected reservation logic
    console.log("Edit selected reservation:", row);
  };

  const handleDeleteReservation = (row) => {
    // Delete selected reservation logic
    console.log("Delete selected reservation:", row);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "No",
        header: "No.",
        type: "numeric",
        grow: false,
        maxSize: 50,
      },
      { accessorKey: "camCode", header: "Cam Code" },
      { accessorKey: "layanan", header: "Layanan Yang Dipilih" },
      { accessorKey: "janjiTemu", header: "Janji Temu Untuk" },
      {
        accessorKey: "age",
        header: "Umur",
        type: "numeric",
        grow: false,
        maxSize: 50,
      },
      {
        accessorKey: "kelamin",
        header: "Mengidentifikasi dirinya sebagai",
      },
      { accessorKey: "jadwal", header: "Jadwal Reservasi" },
      { accessorKey: "UIC", header: "UIC" },
      { accessorKey: "NIKBPJS", header: "NIK/BPJS" },
      { accessorKey: "Antrian", header: "No. Antri", type: "numeric" },
      { accessorKey: "puskesmas", header: "Puskesmas" },
      { accessorKey: "hadir", header: "Hadir" },
      { accessorKey: "hasilTes", header: "Hasil Tes" },
      { accessorKey: "inisiasiARV", header: "Inisiasi ARV" },
      { accessorKey: "phone", header: "HP/WA" },
      { accessorKey: "email", header: "Email" },
      {
        accessorKey: "tanggalReservasi",
        header: "Tanggal submit Reservasi",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: mockDataReservasi,
    title: "Reservasi",
    state: {
      // pagination: { pageIndex: 0, pageSize: 5 },
    },
    enableRowActions: true,
    getRowId: (row) => row.id, //give each row a more useful id
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton
            onClick={() => {
              handleEditReservation(row.original);
            }}
            sx={{
              color: "white",
              bgcolor: "#1ec8b7",
            }}
          >
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            onClick={() => {
              handleDeleteReservation(row.original);
            }}
            sx={{
              color: "white",
              bgcolor: "red",
            }}
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    options: {
      filtering: true,
    },
    muiPaginationProps: {
      shape: "rounded",
    },
    paginationDisplayMode: "pages",
  });

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
            <Box paddingLeft={"10px"}>Dataview - Reservasi</Box>
            <Box sx={{ paddingRight: "10px" }}>
              <Button
                onClick={handleCreateReservation}
                sx={{
                  color: "white",
                  bgcolor: "#1ec8b7",
                }}
                variant="outlined"
              >
                Excel
              </Button>
            </Box>
          </Typography>
        </Box>
        <Box
          bgcolor="#ffffff"
          sx={{
            width: "100%",
            maxWidth: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            padding={"0 0 0 15px"}
            sx={{
              width: "100%",
              height: "50px",
              display: "flex",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <Button
              onClick={handleCreateReservation}
              sx={{
                display: "flex",
                gap: "5px",
                color: "black",
                borderBottom: "1px solid black",
                borderRadius: "0",
                "&:hover": {
                  color: "#1ec8b7",
                  borderBottom: "1px solid #1ec8b7",
                },
              }}
              variant="outlined"
            >
              <TableViewIcon />
              Reservasi Tes
            </Button>
            <Button
              onClick={handleCreateReservation}
              sx={{
                display: "flex",
                gap: "5px",
                color: "black",
                borderBottom: "1px solid black",
                borderRadius: "0",
                "&:hover": {
                  color: "#1ec8b7",
                  borderBottom: "1px solid #1ec8b7",
                },
              }}
              variant="outlined"
            >
              <TableViewIcon />
              Reservasi Refil
            </Button>
            <Button
              onClick={handleCreateReservation}
              sx={{
                color: "black",
                display: "flex",
                gap: "5px",
                borderBottom: "1px solid black",
                borderRadius: "0",
                "&:hover": {
                  color: "#1ec8b7",
                  borderBottom: "1px solid #1ec8b7",
                },
              }}
              variant="outlined"
            >
              <TableViewIcon />
              Reservasi VL
            </Button>
          </Box>
          <Box
            padding={"0 0 0 15px"}
            sx={{
              width: "100%",
              height: "50px",
              display: "flex",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <TextField type="date"></TextField>
            <TextField type="date"></TextField>
            <TextField select></TextField>
            <TextField select></TextField>
            <TextField select></TextField>
            <TextField select></TextField>
          </Box>
        </Box>
        <Box width={"100%"} maxWidth={"90%"}>
          <MaterialReactTable table={table} />
        </Box>
      </Box>
    </>
  );
};

export default Reservasi;
