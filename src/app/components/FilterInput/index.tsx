import { TextField } from "@mui/material";
import { memo } from "react";

const FilterInput = () => {
  return (
    <TextField
      id="outlined-basic"
      label="Team or city"
      variant="outlined"
      size="small"
      fullWidth
    />
  );
};

export default memo(FilterInput);
