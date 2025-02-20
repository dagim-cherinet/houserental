// app/page.js
import {
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import Header from "../components/Header";
import PropertyCard from "../components/PropertyCards";

// Mock data
async function getProperties() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [
    {
      id: 1,
      title: "Cozy Downtown Loft",
      price: "$500/month",
      location: "Addis Ababa, Ethiopia",
      image: "/house1.jpg",
    },
    {
      id: 2,
      title: "Modern Villa Retreat",
      price: "$1200/month",
      location: "Bahir Dar, Ethiopia",
      image: "/house2.jpg",
    },
    {
      id: 3,
      title: "Spacious Family Getaway",
      price: "$800/month",
      location: "Hawassa, Ethiopia",
      image: "/house3.jpg",
    },
    {
      id: 4,
      title: "Charming Studio Flat",
      price: "$450/month",
      location: "Adama, Ethiopia",
      image: "/house4.jpg",
    },
  ];
}

export default async function Home() {
  const properties = await getProperties();

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

          {/* Smaller Search Bar */}
          <Paper
            elevation={2}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "24px",
              p: 0.5,
              maxWidth: "450px", // Smaller width
              mx: "auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <TextField
              placeholder="Where are you going?"
              variant="outlined"
              size="small" // Smaller input
              sx={{
                flexGrow: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "24px 0 0 24px",
                  "& fieldset": { border: "none" },
                },
              }}
            />
            <Button
              variant="contained"
              color="secondary" // Light purple
              size="medium"
              sx={{ borderRadius: "24px", px: 2, py: 1 }}
            >
              Search
            </Button>
          </Paper>
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
    </Box>
  );
}
