// app/ThemeProviderWrapper.js
"use client";
import { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export default function ThemeProviderWrapper({ children }) {
  const [mode, setMode] = useState("light"); // Default to light mode

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode, // Toggle between 'light' and 'dark'
          primary: { main: "#FF385C" }, // Airbnb coral
          secondary: { main: "#AB47BC" }, // Light purple for search button
          text: {
            primary: mode === "light" ? "#222222" : "#FFFFFF",
            secondary: mode === "light" ? "#717171" : "#B0B0B0",
          },
          background: {
            default: mode === "light" ? "#FFFFFF" : "#121212",
            paper: mode === "light" ? "#FFFFFF" : "#1E1E1E",
          },
        },
        typography: {
          fontFamily:
            'Roboto, "Circular", -apple-system, BlinkMacSystemFont, sans-serif',
          h1: { fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.2 },
          h5: { fontSize: "1.25rem", fontWeight: 600 },
          body1: { fontSize: "1rem" },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: { borderRadius: "8px", textTransform: "none" },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: "12px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent baseline styles */}
      <ModeToggleContext.Provider value={toggleMode}>
        {children}
      </ModeToggleContext.Provider>
    </ThemeProvider>
  );
}

// Context to pass toggle function to components
import { createContext } from "react";
export const ModeToggleContext = createContext(() => {});
