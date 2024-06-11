import {
  Box,
  Button,
  IconButton,
  MenuItem,
  TextField,
  useMediaQuery,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";

const Filter = ({ filter, handleFilterChange }) => {
  const theme = useTheme();
  const md = useMediaQuery("(min-width: 1024px)");
  const sm = useMediaQuery("(min-width: 676px)");

  return (
    <>
      <Box
        sx={{
          padding: "15px",
          display: "flex",
          flexDirection: md ? "row" : "column",
          alignItems: "center",
          gap: "8px",
          "& .MuiTextField-root": { width: md ? "25ch" : "100%" },
        }}
        autoComplete="off"
        component="form"
        noValidate
      >
        <Box
          display={"flex"}
          flexDirection={sm ? "row" : "column"}
          alignItems={"center"}
        >
          <TextField
            margin="none"
            type="date"
            name="dateFrom"
            value={filter.dateFrom}
            onChange={(e) => {
              if (e.target.value <= filter.dateTo) handleFilterChange(e);
            }}
          ></TextField>
          <Box height={"50px"} bgcolor={"#f7f8fa"} display={"flex"}>
            <IconButton disabled>
              <MoreHorizIcon />
            </IconButton>
          </Box>
          <TextField
            margin="none"
            type="date"
            name="dateTo"
            value={filter.dateTo}
            onChange={(e) => {
              if (e.target.value >= filter.dateFrom) handleFilterChange(e);
            }}
          ></TextField>
        </Box>
        <TextField select label="Filter by clinic" defaultValue=" ">
          <MenuItem key={""} value={" "}>
            Semua klinik
          </MenuItem>
        </TextField>
        <TextField select label="Filter by cam" defaultValue=" ">
          <MenuItem key={""} value={" "}>
            Semua Camcode
          </MenuItem>
        </TextField>
        <TextField select label="Filter by Pelayanan" defaultValue=" ">
          <MenuItem key={""} value={" "}>
            Semua Pelayanan
          </MenuItem>
        </TextField>
        <TextField select label="Filter by EPiC/Non EPiC" defaultValue=" ">
          <MenuItem key={""} value={" "}>
            Semua data
          </MenuItem>
        </TextField>
      </Box>
      <Box
        sx={{
          padding: "0 0 15px 15px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Button
          //   onClick={handleCreateReservation}
          sx={{
            color: "#F8F6F6",
            bgcolor: "#2A363B",
            padding: "10px",
            width: "100px",
            "&:hover": {
              color: theme.palette.primary.main,
              border: `1px solid ${theme.palette.primary.main}`,
            },
          }}
          variant="outlined"
        >
          <SearchIcon />
          Search
        </Button>
        <Button
          //   onClick={handleCreateReservation}
          sx={{
            padding: "10px",
            color: "#2A363B",
            border: "1px solid #2A363B",
            width: "100px",
            "&:hover": {
              color: theme.palette.secondary.main,
              border: `1px solid ${theme.palette.secondary.main}`,
            },
          }}
          variant="outlined"
        >
          <CloseIcon />
          Reset
        </Button>
      </Box>
    </>
  );
};

export default Filter;
