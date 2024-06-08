import { useFetchPuskes } from "../hooks/useFetchPuskes";
import { GridSearchIcon } from "@mui/x-data-grid";
import { ClearIcon } from "@mui/x-date-pickers";
import { Delete, Edit } from "@mui/icons-material";
import { useMemo, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
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
import DeleteModal from "../components/fasyankes/deleteModal";
import { useNavigate } from "react-router-dom";

const Fasyankes = () => {
  const {
    total,
    puskes,
    puskesFilter,
    pagination,
    setPagination,
    handlePuskesFilterChange,
    fetchPuskesByID,
  } = useFetchPuskes();
  const md = useMediaQuery("(min-width: 1024px)");
  const sm = useMediaQuery("(min-width: 676px)");
  const [openDelete, setOpenDelete] = useState(false);
  const [puskesId, setPuskesId] = useState(false);
  const navigate = useNavigate();

  const deleteModal = (row) => {
    if (!openDelete) {
      setPuskesId(row.id);
      setOpenDelete(true);
    } else {
      setPuskesId(false);
      setOpenDelete(false);
    }
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
              navigate(`/admin/Pengaturan/Fasyankes/edit/${row.original.id}`);
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
              deleteModal(row.original);
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
                onClick={() => {
                  navigate("/admin/Pengaturan/Fasyankes/addnew");
                }}
                sx={{
                  color: "white",
                  bgcolor: "#1ec8b7",
                  textTransform: "none",
                }}
                variant="outlined"
              >
                <AddIcon sx={{ paddingRight: "5px" }} /> Tambah Data
              </Button>
            </Box>
          </Typography>
        </Box>
        <Box width={"100%"} maxWidth={"90%"}>
          <MaterialReactTable table={table} />
        </Box>
        <DeleteModal
          openDelete={openDelete}
          deleteModal={deleteModal}
          puskesId={puskesId}
        />
      </Box>
    </>
  );
};

export default Fasyankes;
