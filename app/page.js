// app/page.js
"use client"; // Make entire page client-side for simplicity

import { usePropertyContext } from "../context/PropertyContext";
// import { useState } from "react";
import { Typography, Container, Box, Grid } from "@mui/material";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCards";

// Mock data (could be fetched server-side initially)
const initialProperties = []; // already replaced by context api-

export default function Home() {
  const { properties, loading, handleSearch } = usePropertyContext();
  //console.log(properties);
  // there was handlesearch function moved to the context

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 }, py: 4 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 6, maxWidth: "700px", mx: "auto" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.8rem", md: "3rem" },
              fontWeight: 800,
              color: "text.primary",
              mb: 2,
            }}
          >
            Find your next home
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", color: "text.secondary", mb: 3 }}
          >
            Explore unique rentals in Ethiopia and beyond
          </Typography>
          <SearchBar onSearch={handleSearch} />
        </Box>

        {/* Properties Section */}
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 3, color: "text.primary" }}
        >
          Explore nearby rentals
        </Typography>
        <Grid container spacing={3}>
          {properties.map((property) => (
            <Grid item xs={12} sm={6} md={3} key={property.id}>
              <PropertyCard {...property} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
