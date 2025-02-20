// app/page.js
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import PropertyCard from "./components/PropertyCards";

// Mock data fetching (replace with your API later)
async function getProperties() {
  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 500)); // Fake delay
  return [
    {
      id: 1,
      title: "Cozy Downtown Apartment",
      price: "$500/month",
      location: "Addis Ababa, Ethiopia",
      image: "/house1.jpg",
    },
    {
      id: 2,
      title: "Modern Villa with Pool",
      price: "$1200/month",
      location: "Bahir Dar, Ethiopia",
      image: "/house2.jpg",
    },
    {
      id: 3,
      title: "Spacious Family Home",
      price: "$800/month",
      location: "Hawassa, Ethiopia",
      image: "/house3.jpg",
    },
  ];
}

export default async function Home() {
  const properties = await getProperties();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Typography
        variant="h1"
        align="center"
        gutterBottom
        sx={{ mb: 4, color: "primary.main" }}
      >
        Find Your Perfect Rental
      </Typography>

      {/* Search Bar */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ mb: 6, justifyContent: "center" }}
      >
        <TextField
          label="Search by location"
          variant="outlined"
          sx={{ minWidth: { xs: "100%", sm: 300 } }}
        />
        <Button variant="contained" color="primary" size="large">
          Search
        </Button>
      </Stack>

      {/* Property Grid */}
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Available Properties
      </Typography>
      <Grid container spacing={3}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <PropertyCard {...property} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
