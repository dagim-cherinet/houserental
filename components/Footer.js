// components/Footer.js
"use client";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        py: 4,
        borderTop: "1px solid",
        borderColor: "divider",
        mt: "auto", // Pushes footer to bottom if content is short
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* About Section */}
          <Box>
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              color="text.primary"
            >
              Rentals
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Discover your perfect home in Ethiopia and beyond.
            </Typography>
            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <IconButton
                href="https://github.com/dagim-cherinet"
                target="_blank"
                color="inherit"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                color="inherit"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                color="inherit"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                gutterBottom
                color="text.primary"
              >
                Explore
              </Typography>
              <Link
                href="/"
                color="text.secondary"
                underline="hover"
                display="block"
                sx={{ mb: 1 }}
              >
                Home
              </Link>
              <Link
                href="/about"
                color="text.secondary"
                underline="hover"
                display="block"
                sx={{ mb: 1 }}
              >
                About
              </Link>
              <Link
                href="/explore"
                color="text.secondary"
                underline="hover"
                display="block"
              >
                Properties
              </Link>
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                gutterBottom
                color="text.primary"
              >
                Support
              </Typography>
              <Link
                href="/contact"
                color="text.secondary"
                underline="hover"
                display="block"
                sx={{ mb: 1 }}
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                color="text.secondary"
                underline="hover"
                display="block"
                sx={{ mb: 1 }}
              >
                FAQ
              </Link>
              <Link
                href="/terms"
                color="text.secondary"
                underline="hover"
                display="block"
              >
                Terms
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Rentals. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
