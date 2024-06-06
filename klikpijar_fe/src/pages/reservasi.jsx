import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  MRT_ShowHideColumnsButton,
  MRT_ToggleDensePaddingButton,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import TableViewIcon from "@mui/icons-material/TableView";
import { Delete, Edit } from "@mui/icons-material";
import { useMemo, useState } from "react";
import moment from "moment/moment";
import Filter from "../components/filter";
import { useFetchReservasi } from "../hooks/useFetchReservasi";
import { GridSearchIcon } from "@mui/x-data-grid";
import { ClearIcon } from "@mui/x-date-pickers";

const Reservasi = () => {
  const {
    reservasi,
    reserveFilter,
    pagination,
    setPagination,
    total,
    fetch,
    handleReserveFilterChange,
  } = useFetchReservasi();
  const [filter, setFilter] = useState({
    dateFrom: moment().format("yyyy-MM-DD"),
    dateTo: moment().format("yyyy-MM-DD"),
  });
  const md = useMediaQuery("(min-width: 1024px)");
  const sm = useMediaQuery("(min-width: 676px)");

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

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
        muiTableBodyCellProps: {
          sx: {
            textAlign: "center",
            border: "1px solid rgba(81, 81, 81, .5)",
          },
        },
      },
      { accessorKey: "cam_code", header: "Cam Code" },
      {
        accessorKey: "client_reserved_services",
        header: "Layanan Yang Dipilih",
      },
      { accessorKey: "client_booking", header: "Janji Temu Untuk" },
      {
        accessorKey: "client_age",
        header: "Umur",
        type: "numeric",
        grow: false,
        maxSize: 50,
      },
      {
        accessorKey: "kelamin",
        header: "Mengidentifikasi dirinya sebagai",
      },
      { accessorKey: "res_assessment_date", header: "Jadwal Reservasi" },
      { accessorKey: "UIC", header: "UIC" },
      { accessorKey: "NIKBPJS", header: "NIK/BPJS" },
      { accessorKey: "Antrian", header: "No. Antri", type: "numeric" },
      { accessorKey: "clinic_name", header: "Puskesmas" },
      { accessorKey: "is_arrived", header: "Hadir" },
      { accessorKey: "hasilTes", header: "Hasil Tes" },
      { accessorKey: "inisiasiARV", header: "Inisiasi ARV" },
      { accessorKey: "client_wa_contact", header: "HP/WA" },
      { accessorKey: "client_email", header: "Email" },
      {
        accessorKey: "res_created_date",
        header: "Tanggal submit Reservasi",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: reservasi,
    title: "Reservasi",
    enableRowActions: true,
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
    enableColumnFilters: false,
    manualPagination: true,
    rowCount: total,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    renderTopToolbar: ({ table }) => {
      return (
        <Box
          sx={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box display={"flex"} alignItems={"center"} height={"100%"}>
            <TextField
              size="small"
              variant="outlined"
              value={reserveFilter.q}
              name="q"
              onChange={handleReserveFilterChange}
              sx={{ padding: "10px" }}
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GridSearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Clear search"
                      onClick={handleReserveFilterChange}
                      edge="end"
                      size="small"
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <MRT_ShowHideColumnsButton table={table} />
            <MRT_ToggleDensePaddingButton table={table} />
          </Box>
          <Typography padding={"10px"}>
            {`Showing ${
              (pagination.pageIndex + 1) * pagination.pageSize +
              1 -
              pagination.pageSize
            } to ${
              (pagination.pageIndex + 1) * pagination.pageSize > total
                ? total
                : (pagination.pageIndex + 1) * pagination.pageSize
            } of ${total} entries`}
          </Typography>
        </Box>
      );
    },
    muiTableProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        padding: "0 15px",
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
      },
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
            sx={{
              minHeight: "50px",
              display: "flex",
              flexDirection: sm ? "row" : "column",
              alignItems: sm ? "center" : "flex-start",
              padding: "0 15px",
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
                width: "190px",
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
                width: "190px",
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
                width: "190px",
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
          <Filter filter={filter} handleFilterChange={handleFilterChange} />
        </Box>
        <Box width={"100%"} maxWidth={"90%"}>
          <MaterialReactTable table={table} />
        </Box>
      </Box>
    </>
  );
};

export default Reservasi;
