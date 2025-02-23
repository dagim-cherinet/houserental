"use client"; // Required for client-side features like useState/useEffect

import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const PropertyContext = createContext();

// Mock data
const mockProperties = [
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

// Provider component
export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    location: "",
    city: "",
    price: [0, 50000], // Initialize price as an array with min/max
    size: "",
  });

  // Fetch properties (mock for now)
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setTimeout(() => {
        setProperties(mockProperties);
        setLoading(false);
      }, 1000);
    };
    fetchProperties();
  }, []);

  // Filter properties based on current filters
  const filteredProperties = properties.filter((prop) => {
    const priceNum = parseInt(
      prop.price.replace("$", "").replace("/month", ""),
      10
    );
    const matchesLocation = filters.location
      ? prop.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    const matchesCity = filters.city ? prop.city === filters.city : true;
    const matchesPrice =
      priceNum >= filters.price[0] && priceNum <= filters.price[1];
    const matchesSize = filters.size ? prop.size === filters.size : true;

    return matchesLocation && matchesCity && matchesPrice && matchesSize;
  });

  // Handle search (optional, if you want a manual trigger)
  // const handleSearch = (newFilters) => {
  //   setFilters(newFiltsers); // Update filters, filtering happens automatically
  // };

  const handleSearchMain = (newFilters) => {
    setFilters(newFilters);
  };

  // console.log({ filteredProperties, filters }); // Debug output

  const value = {
    properties: filteredProperties, // Use filtered list in context
    loading,
    handleSearchMain,
    filters,
    setFilters,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

// Custom hook
export const usePropertyContext = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error(
      "usePropertyContext must be used within a PropertyProvider"
    );
  }
  return context;
};
