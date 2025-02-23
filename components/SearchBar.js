// components/SearchBar.js

import { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Popover,
  Slider,
  MenuItem,
  Select,
  Dialog,
  DialogContent,
  DialogActions,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import { usePropertyContext } from "../context/PropertyContext";

export default function SearchBar({ onSearch }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Mobile breakpoint
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  // const [filters, setFilters] = useState({
  //   location: "",
  //   city: "",
  //   price: [0, 20000],
  //   size: "",
  // });

  const {
    filters,
    setFilters,
    handleSearchMain,
    setNewFilterState,
    newFilterState,
  } = usePropertyContext();

  // const [newFilterState, setNewFilterState] = useState(filters);

  const handleClick = (event, field) => {
    if (isMobile) {
      setOpenDialog(true); // Open dialog on mobile
    } else {
      setAnchorEl(event.currentTarget);
      setActiveField(field);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveField(null);
    setOpenDialog(false);
  };

  const handleFilterChange = (key, value) => {
    // setFilters((prev) => ({ ...prev, [key]: value }));
    setNewFilterState((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    //onSearch(filters);
    //console.log("clicked once");
    handleSearchMain(newFilterState);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "search-popover" : undefined;

  return (
    <>
      {/* Desktop Search Bar */}
      {!isMobile ? (
        <Paper
          elevation={2}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "24px",
            maxWidth: "600px",
            mx: "auto",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              flex: 1,
              p: 1.5,
              borderRight: "1px solid #E0E0E0",
              cursor: "pointer",
              bgcolor: activeField === "location" ? "grey.100" : "inherit",
              "&:hover": { bgcolor: "grey.100" },
            }}
            onClick={(e) => handleClick(e, "location")}
          >
            <Typography variant="body1">
              {filters.location || "Anywhere"}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              p: 1.5,
              borderRight: "1px solid #E0E0E0",
              cursor: "pointer",
              bgcolor: activeField === "city" ? "grey.100" : "inherit",
              "&:hover": { bgcolor: "grey.100" },
            }}
            onClick={(e) => handleClick(e, "city")}
          >
            <Typography variant="body1">
              {filters.city || "Any city"}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              p: 1.5,
              borderRight: "1px solid #E0E0E0",
              cursor: "pointer",
              bgcolor: activeField === "price" ? "grey.100" : "inherit",
              "&:hover": { bgcolor: "grey.100" },
            }}
            onClick={(e) => handleClick(e, "price")}
          >
            <Typography variant="body1">
              ${filters.price[0]} - ${filters.price[1]}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              p: 1.5,
              cursor: "pointer",
              bgcolor: activeField === "size" ? "grey.100" : "inherit",
              "&:hover": { bgcolor: "grey.100" },
            }}
            onClick={(e) => handleClick(e, "size")}
          >
            <Typography variant="body1">
              {filters.size || "Any size"}
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            sx={{ borderRadius: "24px", p: 1.5, minWidth: "auto" }}
            onClick={handleSearch}
          >
            <SearchIcon />
          </Button>
        </Paper>
      ) : (
        /* Mobile Search Bar */
        <Paper
          elevation={2}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "24px",
            maxWidth: "100%",
            mx: "auto",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            p: 1,
          }}
          onClick={(e) => handleClick(e, null)} // Open dialog on click
        >
          <SearchIcon sx={{ mr: 1, color: "text.secondary" }} />
          <Typography variant="body1" color="text.secondary">
            Where you want to live?
          </Typography>
        </Paper>
      )}

      {/* Desktop Popover */}
      {!isMobile && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          sx={{
            "& .MuiPaper-root": { borderRadius: "12px", p: 2, minWidth: 300 },
          }}
        >
          {activeField === "location" && (
            <TextField
              placeholder="Location"
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
            />
          )}
          {activeField === "city" && (
            <Select
              value={filters.city}
              onChange={(e) => handleFilterChange("city", e.target.value)}
              fullWidth
              displayEmpty
              size="small"
            >
              <MenuItem value="">Any city</MenuItem>
              <MenuItem value="Addis Ababa">Addis Ababa</MenuItem>
              <MenuItem value="Bahir Dar">Bahir Dar</MenuItem>
              <MenuItem value="Hawassa">Hawassa</MenuItem>
              <MenuItem value="Adama">Adama</MenuItem>
            </Select>
          )}
          {activeField === "price" && (
            <Box sx={{ px: 2 }}>
              <Typography gutterBottom>Price Range</Typography>

              <Slider
                value={filters.price}
                onChange={(e, newValue) =>
                  handleFilterChange("price", newValue)
                }
                valueLabelDisplay="auto"
                min={0}
                max={50000}
                step={50}
              />
            </Box>
          )}
          {activeField === "size" && (
            <Select
              value={filters.size}
              onChange={(e) => handleFilterChange("size", e.target.value)}
              fullWidth
              displayEmpty
              size="small"
            >
              <MenuItem value="">Any size</MenuItem>
              <MenuItem value="1 bedroom">1 bedroom</MenuItem>
              <MenuItem value="2 bedrooms">2 bedrooms</MenuItem>
              <MenuItem value="3+ bedrooms">3+ bedrooms</MenuItem>
            </Select>
          )}
        </Popover>
      )}

      {/* Mobile Dialog */}
      {isMobile && (
        <Dialog
          fullScreen
          open={openDialog}
          onClose={handleClose}
          sx={{ "& .MuiDialog-paper": { bgcolor: "background.default" } }}
        >
          <DialogContent sx={{ pt: 4 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="h6" fontWeight={700}>
                Search Filters
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                placeholder="Location"
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
              />
              <Select
                value={filters.city}
                onChange={(e) => handleFilterChange("city", e.target.value)}
                fullWidth
                displayEmpty
                size="small"
              >
                <MenuItem value="">Any city</MenuItem>
                <MenuItem value="Addis Ababa">Addis Ababa</MenuItem>
                <MenuItem value="Bahir Dar">Bahir Dar</MenuItem>
                <MenuItem value="Hawassa">Hawassa</MenuItem>
                <MenuItem value="Adama">Adama</MenuItem>
              </Select>
              <Box>
                <Typography gutterBottom>Price Range</Typography>
                <Slider
                  value={filters.price}
                  onChange={(e, newValue) =>
                    handleFilterChange("price", newValue)
                  }
                  valueLabelDisplay="auto"
                  min={0}
                  max={50000}
                  step={50}
                />
              </Box>
              <Select
                value={filters.size}
                onChange={(e) => handleFilterChange("size", e.target.value)}
                fullWidth
                displayEmpty
                size="small"
              >
                <MenuItem value="">Any size</MenuItem>
                <MenuItem value="1 bedroom">1 bedroom</MenuItem>
                <MenuItem value="2 bedrooms">2 bedrooms</MenuItem>
                <MenuItem value="3+ bedrooms">3+ bedrooms</MenuItem>
              </Select>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ borderRadius: "24px", py: 1.5 }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
