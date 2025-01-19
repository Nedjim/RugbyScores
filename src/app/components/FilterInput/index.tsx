import { TextField } from "@mui/material";
import { memo } from "react";

const FilterInput = (props: {
  onChange: (value: string) => void;
  label: string;
}) => {
  const { onChange, label } = props;

  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      size="small"
      onChange={(e) => onChange(e.target.value)}
      fullWidth
    />
  );
};

export default memo(FilterInput);
