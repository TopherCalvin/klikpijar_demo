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
import { Delete } from "@mui/icons-material";
import { useMemo, useState } from "react";
import moment from "moment/moment";
import Filter from "../components/filter";
import { useFetchReservasi } from "../hooks/useFetchReservasi";
import { GridSearchIcon } from "@mui/x-data-grid";
import { ClearIcon } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

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
  const navigate = useNavigate();
  const theme = useTheme();
  const xxl = useMediaQuery(theme.breakpoints.up("xxl"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const smLimit = useMediaQuery("(min-width: 676px)");
  const [columnVisibility, setColumnVisibility] = useState({});
  const [filter, setFilter] = useState({
    dateFrom: moment().format("yyyy-MM-DD"),
    dateTo: moment().format("yyyy-MM-DD"),
  });

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
        accessorKey: "gender_name",
        header: "Mengidentifikasi dirinya sebagai",
      },
      { accessorKey: "res_date", header: "Jadwal Reservasi" },
      { accessorKey: "uic", header: "UIC" },
      { accessorKey: "identity_number", header: "NIK/BPJS" },
      { accessorKey: "booking_code", header: "No. Antri", type: "numeric" },
      { accessorKey: "clinic_name", header: "Puskesmas" },
      { accessorKey: "is_arrived", header: "Hadir" },
      { accessorKey: "hasil", header: "Hasil Tes" },
      { accessorKey: "arv", header: "Inisiasi ARV" },
      { accessorKey: "client_wa_contact", header: "HP/WA" },
      { accessorKey: "client_email", header: "Email" },
      {
        accessorKey: "res_created_date",
        header: "Tanggal submit Reservasi",
      },
      {
        id: "actions",
        header: "Actions",
        maxSize: "50",
        Cell: ({ row }) => (
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Tooltip title="Delete">
              <IconButton
                onClick={() => {
                  console.log(row.original);
                }}
                sx={{
                  color: "#F8F6F6",
                  bgcolor: theme.palette.secondary.main,
                }}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: reservasi,
    title: "Reservasi",
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    enableColumnFilters: false,
    manualPagination: true,
    enableExpandAll: false,
    rowCount: total,
    state: {
      pagination,
      columnVisibility,
    },
    muiDetailPanelProps: () => ({
      sx: (theme) => ({
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(255,210,244,0.1)"
            : "rgba(0,0,0,0.1)",
      }),
    }),
    muiExpandButtonProps: ({ row, table }) => ({
      onClick: () => table.setExpanded({ [row.id]: !row.getIsExpanded() }), //only 1 detail panel open at a time
      sx: {
        transform: row.getIsExpanded() ? "rotate(180deg)" : "rotate(-90deg)",
        transition: "transform 0.2s",
      },
    }),
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          display: "grid",
          margin: "auto",
          gridTemplateColumns: "1fr",
          width: "100%",
        }}
      >
        <Box width={"100%"}>
          {columnVisibility.name ? null : (
            <Typography>
              <Box fontWeight={"600"}>Nama Fasyankes:</Box> {row.original?.name}
            </Typography>
          )}
          {columnVisibility.address_desc ? null : (
            <Typography>
              <Box fontWeight={"600"}>Alamat:</Box> {row.original?.address_desc}
            </Typography>
          )}
          {columnVisibility.phone_num ? null : (
            <Typography>
              <Box fontWeight={"600"}>{`Telepon | WhatsApp (WA):`}</Box>
              <Box width={"50%"}>{row.original?.phone_num}</Box>
            </Typography>
          )}
          {columnVisibility.email ? null : (
            <Typography>
              <Box fontWeight={"600"}>Email:</Box> {row.original?.email}
            </Typography>
          )}
          {columnVisibility.actions ? null : (
            <Typography>
              <Box fontWeight={"600"}>Action:</Box>
              <Tooltip title="Delete">
                <IconButton
                  onClick={() => {
                    console.log(row.original);
                  }}
                  sx={{
                    color: "white",
                    bgcolor: "red",
                  }}
                >
                  <Delete />
                </IconButton>
              </Tooltip>
            </Typography>
          )}
        </Box>
      </Box>
    ),
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
              total > 0
                ? (pagination.pageIndex + 1) * pagination.pageSize +
                  1 -
                  pagination.pageSize
                : 0
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
              flexDirection: smLimit ? "row" : "column",
              alignItems: smLimit ? "center" : "flex-start",
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
