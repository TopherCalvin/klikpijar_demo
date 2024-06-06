import { useFetchPuskes } from "../hooks/useFetchPuskes";
import { GridSearchIcon } from "@mui/x-data-grid";
import { ClearIcon } from "@mui/x-date-pickers";
import { Edit } from "@mui/icons-material";
import { useMemo } from "react";
import {
  MRT_ToggleDensePaddingButton,
  MRT_ShowHideColumnsButton,
  useMaterialReactTable,
  MaterialReactTable,
} from "material-react-table";
import {
  InputAdornment,
  useMediaQuery,
  IconButton,
  Typography,
  TextField,
  Tooltip,
  Button,
  Box,
} from "@mui/material";

const Fasyankes = () => {
  const {
    puskes,
    puskesFilter,
    pagination,
    setPagination,
    handlePuskesFilterChange,
    total,
    fetch,
  } = useFetchPuskes();
  const md = useMediaQuery("(min-width: 1024px)");
  const sm = useMediaQuery("(min-width: 676px)");

  const handleCreateReservation = () => {
    // Create new reservation logic
    console.log("Create new reservation");
  };

  const handleEditReservation = (row) => {
    // Edit selected reservation logic
    console.log("Edit selected reservation:", row);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "code",
        header: "Kode",
        grow: false,
        maxSize: 50,
      },
      { accessorKey: "name", header: "Nama Fasyankes" },
      { accessorKey: "address_desc", header: "Alamat" },
      {
        accessorKey: "phone_num",
        header: "Telepon | WA (WhatsApp)",
        grow: false,
        maxSize: 50,
      },
      { accessorKey: "email", header: "Email" },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: puskes,
    title: "Dataview Fasyankes/Klinik",
    enableRowActions: true,
    renderRowActions: ({ row }) => (
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
              value={puskesFilter.q}
              name="q"
              onChange={handlePuskesFilterChange}
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
                      onClick={handlePuskesFilterChange}
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
            <Box paddingLeft={"10px"}>Dataview Fasyankes/Klinik</Box>
            <Box sx={{ paddingRight: "10px" }}>
              <Button
                onClick={handleCreateReservation}
                sx={{
                  color: "white",
                  bgcolor: "#1ec8b7",
                }}
                variant="outlined"
              >
                Tambah Data
              </Button>
            </Box>
          </Typography>
        </Box>
        <Box width={"100%"} maxWidth={"90%"}>
          <MaterialReactTable table={table} />
        </Box>
      </Box>
    </>
  );
};

export default Fasyankes;
