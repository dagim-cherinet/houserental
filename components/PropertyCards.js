// components/PropertyCards.js
"use client";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

// Styled card with Airbnb-like hover
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "12px",
  overflow: "hidden",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
  },
}));

export default function PropertyCard({ id, title, price, location, image }) {
  return (
    <Link href={`/properties/${id}`} passHref legacyBehavior>
      <StyledCard component="a" sx={{ textDecoration: "none" }}>
        <CardMedia>
          <Box sx={{ position: "relative", height: 200 }}>
            <Image
              src={image || "/placeholder-house.jpg"}
              alt={title}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "12px 12px 0 0" }}
            />
          </Box>
        </CardMedia>
        <CardContent sx={{ p: 2 }}>
          <Typography variant="h5" component="div" noWrap>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" noWrap>
            {location}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, fontWeight: 500 }}>
            {price}
          </Typography>
        </CardContent>
      </StyledCard>
    </Link>
  );
}
