import { TextField } from "@mui/material";
import { memo } from "react";

const FilterInput = (props: { onChange: (event: Event) => void; label: string }) => {
  const { onChange, label } = props;

  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      size="small"
      onChange={onChange}
      fullWidth
    />
  );
};

export default memo(FilterInput);
