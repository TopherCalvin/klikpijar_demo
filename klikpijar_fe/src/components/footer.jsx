import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Quick Links</Typography>
            <ul>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  About
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Contact
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Social Media</Typography>
            <ul>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  <i className="fab fa-facebook-f" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  <i className="fab fa-twitter" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  <i className="fab fa-instagram" />
                  Instagram
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ marginTop: "20px" }}>
          2022 © FHI360 EPiC
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
