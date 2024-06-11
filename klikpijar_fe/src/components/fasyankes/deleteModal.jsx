import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Typography from "@mui/material/Typography";
import { useFetchPuskes } from "../../hooks/useFetchPuskes";
import { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

export default function DeleteModal({ openDelete, deleteModal, puskesId }) {
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const { fetchPuskesByID, deletePuskesByID } = useFetchPuskes();
  const theme = useTheme();

  useEffect(() => {
    if (puskesId) fetchPuskesByID(puskesId);
  }, [openDelete]);

  return (
    <Modal
      keepMounted
      open={openDelete}
      onClose={deleteModal}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      {!openErrorModal ? (
        <Box sx={style}>
          <Box
            fontSize={"100px"}
            width={"100%"}
            color={theme.palette.secondary.main}
            textAlign={"center"}
          >
            <HelpOutlineOutlinedIcon fontSize="inherit" />
          </Box>
          <Typography
            id="keep-mounted-modal-title"
            width={"100%"}
            textAlign={"center"}
            variant="h6"
            component="h2"
            fontWeight={"600"}
          >
            Confirmation
          </Typography>
          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2, textAlign: "center", width: "100%", opacity: "0.5" }}
          >
            Yakin akan menghapus data ini dan yang terkait dengannya?
          </Typography>
          <Box
            sx={{
              padding: "8px 0",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Button
              onClick={deleteModal}
              sx={{
                display: "flex",
                gap: "5px",
                color: "white",
                width: "150px",
                height: "40px",
                bgcolor: "#aaaaaa",
                borderRadius: "3px",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#999999",
                },
              }}
              variant="outlined"
            >
              Tidak, batalkan!
            </Button>
            <Button
              onClick={() => {
                deletePuskesByID(setOpenErrorModal, deleteModal);
              }}
              sx={{
                display: "flex",
                gap: "5px",
                width: "150px",
                height: "40px",
                borderRadius: "3px",
                textTransform: "none",
                color: "#F8F6F6",
                bgcolor: theme.palette.secondary.main,
                "&:hover": {
                  bgcolor: "#B33435",
                },
              }}
              variant="outlined"
            >
              Ya, lanjutkan
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={style}>
          <Box
            fontSize={"100px"}
            width={"100%"}
            color={theme.palette.secondary.main}
            textAlign={"center"}
          >
            <ErrorOutlineIcon fontSize="inherit" />
          </Box>
          <Typography
            id="keep-mounted-modal-title"
            width={"100%"}
            textAlign={"center"}
            variant="h6"
            component="h2"
            fontWeight={"600"}
          >
            Error
          </Typography>
          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2, textAlign: "center", width: "100%", opacity: "0.5" }}
          >
            Something went wrong...
          </Typography>
          <Box
            sx={{
              padding: "8px 0",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Button
              onClick={() => {
                deleteModal();
                setOpenErrorModal(false);
              }}
              sx={{
                display: "flex",
                gap: "5px",
                width: "150px",
                height: "40px",
                borderRadius: "3px",
                textTransform: "none",
                color: "#F8F6F6",
                bgcolor: theme.palette.secondary.main,
                "&:hover": {
                  bgcolor: "#B33435",
                },
              }}
              variant="outlined"
            >
              Kembali
            </Button>
          </Box>
        </Box>
      )}
    </Modal>
  );
}
