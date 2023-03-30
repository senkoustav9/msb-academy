import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "20px",
      }}
      component="footer"
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "left",
            display: "flex",
            flexDirection: "row",
            my: 1,
            borderTop: "none",
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2023 | MSB Academy | All rights reserved
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "right",
              display: { xs: "none", md: "flex" },
            }}
          >
            <FacebookIcon sx={{ ml: 1 }} />
            <YouTubeIcon sx={{ ml: 1 }} />
            <TwitterIcon sx={{ ml: 1 }} />
            <InstagramIcon sx={{ ml: 1 }} />
            <LinkedInIcon sx={{ ml: 1 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
