import React, { useState } from "react";
import { TextField, MenuItem, Button, Box } from "@mui/material";

const Filter = ({ onFilterChange }) => {
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  const handleApplyFilters = () => {
    onFilterChange({ country, category });
  };

  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        select
        label="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        fullWidth
      >
        <MenuItem value="">All Countries</MenuItem>
        <MenuItem value="us">United States</MenuItem>
        <MenuItem value="gb">United Kingdom</MenuItem>
        {/* Add more countries as needed */}
      </TextField>

      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
      >
        <MenuItem value="">All Categories</MenuItem>
        <MenuItem value="business">Business</MenuItem>
        <MenuItem value="entertainment">Entertainment</MenuItem>
        <MenuItem value="health">Health</MenuItem>
        <MenuItem value="science">Science</MenuItem>
        <MenuItem value="sports">Sports</MenuItem>
        <MenuItem value="technology">Technology</MenuItem>
      </TextField>

      <Button variant="contained" onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filter;
