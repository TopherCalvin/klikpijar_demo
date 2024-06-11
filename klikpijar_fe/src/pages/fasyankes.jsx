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
import { useTheme } from "@emotion/react";

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
  const navigate = useNavigate();
  const theme = useTheme();
  const xxl = useMediaQuery(theme.breakpoints.up("xxl"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const [openDelete, setOpenDelete] = useState(false);
  const [puskesId, setPuskesId] = useState(false);
  const [columnVisibility, setColumnVisibility] = useState({
    actions: xxl,
    email: xl,
    phone_num: lg,
    address_desc: md,
    name: sm,
  });

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
      {
        id: "actions",
        header: "Actions",
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
                  deleteModal(row.original);
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
    data: puskes,
    title: "Dataview Fasyankes/Klinik",
    enableColumnFilters: false,
    manualPagination: true,
    rowCount: total,
    state: {
      pagination,
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    enableExpandAll: false,
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
    renderDetailPanel: ({ row }) =>
      !xxl ? (
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
                <Box fontWeight={"600"}>Nama Fasyankes:</Box>{" "}
                {row.original?.name}
              </Typography>
            )}
            {columnVisibility.address_desc ? null : (
              <Typography>
                <Box fontWeight={"600"}>Alamat:</Box>{" "}
                {row.original?.address_desc}
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
                      deleteModal(row.original);
                    }}
                    sx={{
                      color: "#F8F6F6",
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
      ) : null,
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
              borderRadius: "6px 6px 0 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "6px 0",
              color: "#2A363B",
            }}
            bgcolor={theme.palette.primary.main}
          >
            <Box paddingLeft={"10px"}>Dataview Fasyankes/Klinik</Box>
            <Box sx={{ paddingRight: "10px" }}>
              <Button
                onClick={() => {
                  navigate("/admin/Pengaturan/Fasyankes/addnew");
                }}
                sx={{
                  color: "#2A363B",
                  textTransform: "none",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                  width: "150px",
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
