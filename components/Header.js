// components/Header.js
"use client";
import { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Dark mode icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Light mode icon
import { ModeToggleContext } from "../app/ThemeProviderWrapper";
import Link from "next/link";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const toggleMode = useContext(ModeToggleContext);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid #E0E0E0" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "primary.main" }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Rentals
          </Link>
        </Typography>

        {/* Navigation Links (hidden on mobile) */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button color="inherit" href="/" sx={{ color: "text.primary" }}>
            Home
          </Button>
          <Button color="inherit" href="/about" sx={{ color: "text.primary" }}>
            About
          </Button>
          <Button
            color="inherit"
            href="/explore"
            sx={{ color: "text.primary" }}
          >
            Explore
          </Button>
        </Box>

        {/* Right Side: Profile, Toggle, Hamburger */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Dark Mode Toggle */}
          <IconButton onClick={toggleMode} color="inherit">
            {theme.palette.mode === "light" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>

          {/* Profile Icon */}
          <IconButton href="/login" color="inherit">
            <AccountCircle />
          </IconButton>

          {/* Hamburger Menu (visible on mobile) */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ "& .MuiPaper-root": { borderRadius: "8px" } }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link href="/">Home</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/about">About</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/explore">Explore</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/login">Sign In</Link>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
