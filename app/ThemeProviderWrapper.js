// app/ThemeProviderWrapper.js
"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0288d1" }, // Professional blue
    secondary: { main: "#ff5722" }, // Vibrant orange for accents
    background: { default: "#f5f5f5" }, // Light gray background
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 600 },
  },
});

export default function ThemeProviderWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
