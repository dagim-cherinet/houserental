"use client"; // Required for client-side features like useState/useEffect

import {
  createContext,
  useContext,
  useState,
  useEffect,
  Component,
} from "react";
import { initialdata } from "../components/initialdata";
// Create the context
const PropertyContext = createContext();

// Mock data
const mockProperties = initialdata;
// Provider component
export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    location: "",
    city: "",
    price: [0, 5000], // Initialize price as an array with min/max
    size: "",
  });
  const [newFilterState, setNewFilterState] = useState(filters);
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
    setNewFilterState,
    newFilterState,
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
