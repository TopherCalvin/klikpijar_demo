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
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const smLimit = useMediaQuery("(min-width: 676px)");
  const [columnVisibility, setColumnVisibility] = useState({
    cam_code: true,
    client_reserved_services: sm,
    client_booking: md,
    client_age: lg,
    gender_name: xl,
    res_date: false,
    uic: false,
    identity_number: false,
    booking_code: false,
    clinic_name: false,
    is_arrived: false,
    hasil: false,
    arv: false,
    client_wa_contact: false,
    client_email: false,
    res_created_date: false,
    actions: false,
  });
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
            <Tooltip title="Edit">
              <IconButton
                onClick={() => {
                  navigate(
                    `/admin/Pengaturan/Fasyankes/edit/${row.original.id}`
                  );
                }}
                sx={{
                  color: "#2A363B",
                  bgcolor: theme.palette.primary.main,
                }}
              >
                <Edit />
              </IconButton>
            </Tooltip>
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
          {columnVisibility.cam_code ? null : (
            <Typography>
              <Box fontWeight={"600"}>Cam Code:</Box> {row.original?.cam_code}
            </Typography>
          )}
          {columnVisibility.client_reserved_services ? null : (
            <Typography>
              <Box fontWeight={"600"}>Layanan yang dipilih:</Box>{" "}
              {row.original?.client_reserved_services}
            </Typography>
          )}
          {columnVisibility.client_booking ? null : (
            <Typography>
              <Box fontWeight={"600"}>Janji Temu Untuk:</Box>
              <Box>{row.original?.client_booking}</Box>
            </Typography>
          )}
          {columnVisibility.client_age ? null : (
            <Typography>
              <Box fontWeight={"600"}>Umur:</Box>
              <Box>{row.original?.client_age}</Box>
            </Typography>
          )}
          {columnVisibility.gender_name ? null : (
            <Typography>
              <Box fontWeight={"600"}>Mengidentifikasi dirinya sebagai:</Box>
              <Box>{row.original?.gender_name}</Box>
            </Typography>
          )}
          {columnVisibility.res_date ? null : (
            <Typography>
              <Box fontWeight={"600"}>Jadwal Reservasi:</Box>
              <Box>{row.original?.res_date}</Box>
            </Typography>
          )}
          {columnVisibility.uic ? null : (
            <Typography>
              <Box fontWeight={"600"}>UIC:</Box>
              <Box>{row.original?.uic}</Box>
            </Typography>
          )}
          {columnVisibility.identity_number ? null : (
            <Typography>
              <Box fontWeight={"600"}>NIK/BPJS:</Box>
              <Box>{row.original?.identity_number}</Box>
            </Typography>
          )}
          {columnVisibility.booking_code ? null : (
            <Typography>
              <Box fontWeight={"600"}>No. Antri:</Box>
              <Box>{row.original?.booking_code}</Box>
            </Typography>
          )}
          {columnVisibility.clinic_name ? null : (
            <Typography>
              <Box fontWeight={"600"}>Puskesmas:</Box>
              <Box>{row.original?.clinic_name}</Box>
            </Typography>
          )}
          {columnVisibility.is_arrived ? null : (
            <Typography>
              <Box fontWeight={"600"}>Hadir:</Box>
              <Box>{row.original?.is_arrived}</Box>
            </Typography>
          )}
          {columnVisibility.arv ? null : (
            <Typography>
              <Box fontWeight={"600"}>Inisiasi ARV:</Box>
              <Box>{row.original?.arv}</Box>
            </Typography>
          )}
          {columnVisibility.client_wa_contact ? null : (
            <Typography>
              <Box fontWeight={"600"}>HP/WA:</Box>
              <Box>{row.original?.client_wa_contact}</Box>
            </Typography>
          )}
          {columnVisibility.client_email ? null : (
            <Typography>
              <Box fontWeight={"600"}>Email:</Box> {row.original?.client_email}
            </Typography>
          )}
          {columnVisibility.res_created_date ? null : (
            <Typography>
              <Box fontWeight={"600"}>Tanggal Submit Reservasi:</Box>{" "}
              {row.original?.res_created_date}
            </Typography>
          )}
          {columnVisibility.actions ? null : (
            <Typography>
              <Box fontWeight={"600"}>Action:</Box>
              <Tooltip title="Edit">
                <IconButton
                  onClick={() => {
                    navigate(
                      `/admin/Pengaturan/Fasyankes/edit/${row.original.id}`
                    );
                  }}
                  sx={{
                    color: "#2A363B",
                    bgcolor: theme.palette.primary.main,
                  }}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
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
            sx={{
              width: "100%",
              height: "50px",
              display: "flex",
              borderRadius: "6px 6px 0 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#2A363B",
            }}
            bgcolor={theme.palette.primary.main}
          >
            <Box paddingLeft={"10px"}>Dataview - Reservasi</Box>
            <Box sx={{ paddingRight: "10px" }}>
              <Button
                onClick={handleCreateReservation}
                sx={{
                  color: "#2A363B",
                  textTransform: "none",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                  width: "150px",
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
                width: "190px",
                borderRadius: "0",
                color: "#2A363B",
                borderBottom: "1px solid #2A363B",
                "&:hover": {
                  color: theme.palette.secondary.main,
                  borderBottom: `1px solid ${theme.palette.secondary.main}`,
                },
              }}
            >
              <TableViewIcon />
              Reservasi Tes
            </Button>
            <Button
              onClick={handleCreateReservation}
              sx={{
                display: "flex",
                gap: "5px",
                width: "190px",
                borderRadius: "0",
                color: "#2A363B",
                borderBottom: "1px solid #2A363B",
                "&:hover": {
                  color: theme.palette.secondary.main,
                  borderBottom: `1px solid ${theme.palette.secondary.main}`,
                },
              }}
            >
              <TableViewIcon />
              Reservasi Refil
            </Button>
            <Button
              onClick={handleCreateReservation}
              sx={{
                display: "flex",
                width: "190px",
                gap: "5px",
                borderRadius: "0",
                color: "#2A363B",
                borderBottom: "1px solid #2A363B",
                "&:hover": {
                  color: theme.palette.secondary.main,
                  borderBottom: `1px solid ${theme.palette.secondary.main}`,
                },
              }}
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
