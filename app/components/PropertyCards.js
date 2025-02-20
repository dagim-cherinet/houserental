// components/PropertyCards.js
"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image"; // For optimized images

// Styled card with hover effect
const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[8],
  },
}));

export default function PropertyCard({ id, title, price, location, image }) {
  return (
    <StyledCard>
      <CardMedia>
        <Box sx={{ position: "relative", height: 200 }}>
          <Image
            src={image || "/placeholder-house.jpg"} // Fallback image
            alt={title}
            layout="fill"
            objectFit="cover"
            style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}
          />
        </Box>
      </CardMedia>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
          {price}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          sx={{ mt: 2 }}
          href={`/properties/${id}`} // Link to dynamic route
        >
          View Details
        </Button>
      </CardContent>
    </StyledCard>
  );
}
