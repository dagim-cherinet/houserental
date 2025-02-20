// app/page.js
"use client"; // Make entire page client-side for simplicity
import { useState } from "react";
import { Typography, Container, Box, Grid } from "@mui/material";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCards";

// Mock data (could be fetched server-side initially)
const initialProperties = [
  {
    id: 1,
    title: "Cozy Downtown Loft",
    price: "$500/month",
    location: "Downtown",
    city: "Addis Ababa",
    size: "1 bedroom",
    image: "/house1.jpg",
  },
  {
    id: 2,
    title: "Modern Villa Retreat",
    price: "$1200/month",
    location: "Lakeside",
    city: "Bahir Dar",
    size: "3+ bedrooms",
    image: "/house2.jpg",
  },
  {
    id: 3,
    title: "Spacious Family Getaway",
    price: "$800/month",
    location: "Suburbs",
    city: "Hawassa",
    size: "2 bedrooms",
    image: "/house3.jpg",
  },
  {
    id: 4,
    title: "Charming Studio Flat",
    price: "$450/month",
    location: "Central",
    city: "Adama",
    size: "1 bedroom",
    image: "/house4.jpg",
  },
];

export default function Home() {
  const [properties, setProperties] = useState(initialProperties);

  const handleSearch = (filters) => {
    const filtered = initialProperties.filter((prop) => {
      const priceNum = parseInt(
        prop.price.replace("$", "").replace("/month", ""),
        10
      );
      return (
        (!filters.location ||
          prop.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())) &&
        (!filters.city || prop.city === filters.city) &&
        priceNum >= filters.price[0] &&
        priceNum <= filters.price[1] &&
        (!filters.size || prop.size === filters.size)
      );
    });
    setProperties(filtered);
  };

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
