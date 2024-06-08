import MenuIcon from "@mui/icons-material/Menu";
import {
  useMediaQuery,
  Typography,
  Button,
  Box,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFetchPuskes } from "../hooks/useFetchPuskes";
import { useFetchProvince } from "../hooks/useFetchProvince";
import { useFetchKabupaten } from "../hooks/useFetchKabupaten";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const AddEditFasyankes = () => {
  const sm = useMediaQuery("(min-width: 676px)");
  const md = useMediaQuery("(min-width: 1024px)");
  const { provinces } = useFetchProvince();
  const { regencies } = useFetchKabupaten();
  const { puskesData, fetchPuskesByID } = useFetchPuskes();
  const currentPath = useLocation();
  const tujuan = currentPath.pathname.split("/")[4] == "edit";

  useEffect(() => {
    if (tujuan) fetchPuskesByID(currentPath.pathname.split("/")[5]);
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nama Fasyankes is required"),
    code: Yup.string().required("Kode Fasyankes is required"),
    province_kode: Yup.string().required("Provinsi is required"),
    regency_kode: Yup.string().required("Kota is required"),
    // kecamatan: Yup.string().required("Kecamatan is required"),
    // kelurahan: Yup.string().required("Kelurahan is required"),
    address_desc: Yup.string().required("Alamat is required"),
    telepon: Yup.string()
      .required("Telepon is required")
      .matches(/^\d+$/, "Telepon must contain only numbers"),
    nomorWA: Yup.string()
      .required("Nomor WA is required")
      .matches(/^\d+$/, "Nomor WA must contain only numbers"),
    email: Yup.string().email("Invalid email"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch("/api/fasyankes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        // Handle success
        console.log("Data submitted successfully");
        // Reset form
        setSubmitting(false);
      } else {
        // Handle error
        console.error("Failed to submit data");
        setSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  };

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
            <Box paddingLeft={"10px"}>{`${
              tujuan ? "Rubah" : "Tambah"
            } Fasyankes/Klinik`}</Box>
            <Box sx={{ paddingRight: "10px" }}>
              <Button
                onClick={() => {
                  console.log("a");
                }}
                sx={{
                  color: "white",
                  bgcolor: "#1ec8b7",
                  textTransform: "none",
                }}
                variant="outlined"
              >
                <MenuIcon sx={{ paddingRight: "5px" }} /> Lihat Data
              </Button>
            </Box>
          </Typography>
        </Box>
        <Box width={"100%"} maxWidth={"90%"}>
          <Formik
            initialValues={puskesData}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box
                  sx={{
                    padding: "15px",
                    height: "100%",
                    display: "flex",
                    flexDirection: md ? "row" : "column",
                    gap: "20px",
                    bgcolor: "white",
                  }}
                >
                  <Box sx={{ width: md ? "50%" : "100%" }}>
                    <TextField
                      fullWidth
                      label="Nama Fasyankes*"
                      name="name"
                      margin="normal"
                    />
                    <ErrorMessage name="name" component="div" />

                    <TextField
                      fullWidth
                      label="Kode Fasyankes*"
                      name="code"
                      margin="normal"
                    />
                    <ErrorMessage name="code" component="div" />

                    <TextField
                      select
                      fullWidth
                      label="Provinsi*"
                      name="province_kode"
                      margin="normal"
                      // onChange={(event) => fetchCities(event.target.value)}
                    >
                      {provinces?.map((province) => (
                        <MenuItem key={province.id} value={province.id}>
                          {province.nama}
                        </MenuItem>
                      ))}
                    </TextField>
                    <ErrorMessage name="province_kode" component="div" />

                    <TextField
                      select
                      fullWidth
                      label="Kab./Kota*"
                      name="regency_kode"
                      // onChange={(event) => fetchDistricts(event.target.value)}
                      margin="normal"
                    >
                      {regencies?.map((city) => (
                        <MenuItem key={city.id} value={city.id}>
                          {city.nama}
                        </MenuItem>
                      ))}
                    </TextField>
                    <ErrorMessage name="regency_kode" component="div" />

                    {/* <Select
                  fullWidth
                  label="Kecamatan*"
                  name="kecamatan"
                  onChange={(event) => fetchVillages(event.target.value)}
                  margin="normal"
                >
                  {districts.map((district) => (
                    <MenuItem key={district.id} value={district.id}>
                      {district.name}
                    </MenuItem>
                  ))}
                </Select>
                <ErrorMessage name="kecamatan" component="div" />

                <Select
                  fullWidth
                  label="Kelurahan"
                  name="kelurahan"
                  margin="normal"
                >
                  {villages.map((village) => (
                    <MenuItem key={village.id} value={village.id}>
                      {village.name}
                    </MenuItem>
                  ))}
                </Select>
                <ErrorMessage name="kelurahan" component="div" />  */}

                    <TextField
                      fullWidth
                      label="Alamat*"
                      name="address_desc"
                      margin="normal"
                    />
                    <ErrorMessage name="address_desc" component="div" />

                    <TextField
                      fullWidth
                      label="Telepon"
                      name="telepon"
                      margin="normal"
                      type="number"
                    />
                    <ErrorMessage name="telepon" component="div" />

                    <TextField
                      fullWidth
                      label="Nomor WA"
                      name="nomorWA"
                      margin="normal"
                      type="number"
                    />
                    <ErrorMessage name="nomorWA" component="div" />

                    <TextField
                      fullWidth
                      label="Email*"
                      name="email"
                      margin="normal"
                      type="email"
                    />
                    <ErrorMessage name="email" component="div" />
                  </Box>

                  {/* Layanan */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: md ? "50%" : "100%",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox name="hivSelfTesting" />}
                      label="HIV self-testing"
                    />
                    <FormControlLabel
                      control={<Checkbox name="hivTesting" />}
                      label="HIV testing"
                    />
                    <FormControlLabel
                      control={<Checkbox name="hivTreatment" />}
                      label="HIV treatment (ART)"
                    />
                    <FormControlLabel
                      control={<Checkbox name="viralLoadTesting" />}
                      label="Viral load testing"
                    />
                    <FormControlLabel
                      control={<Checkbox name="preExposureProphylaxis" />}
                      label="Pre-Exposure Prophylaxis (PrEP)"
                    />
                    <FormControlLabel
                      control={<Checkbox name="stiTesting" />}
                      label="STI testing"
                    />

                    {/* Aktif */}
                    <FormControlLabel
                      control={<Checkbox name="aktif" checked disabled />}
                      label="Aktif"
                    />

                    {/* Tampilkan */}
                    <FormControlLabel
                      control={<Checkbox name="tampilkan" checked disabled />}
                      label="Tampilkan"
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    height: "66px",
                    padding: "0 0 15px 15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    bgcolor: "white",
                  }}
                >
                  <Button
                    //   onClick={handleCreateReservation}
                    sx={{
                      color: "white",
                      bgcolor: "#5867dd",
                      padding: "10px",
                      width: "100px",
                    }}
                    variant="outlined"
                  >
                    Submit
                  </Button>
                  <Button
                    //   onClick={handleCreateReservation}
                    sx={{
                      padding: "10px",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      width: "100px",
                    }}
                    variant="outlined"
                  >
                    Reset
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
};

export default AddEditFasyankes;
