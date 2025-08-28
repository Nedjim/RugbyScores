import Button from "@mui/material/Button";
import { memo } from "react";

type FilterButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

function FilterButton(props: FilterButtonProps) {
  const { label, isActive, onClick } = props;

  return (
    <Button
      color="inherit"
      variant={isActive ? "contained" : "outlined"}
      onClick={onClick}
      size="small"
      sx={isActive ? { background: "#05201b", color: "#7fffd4" } : {}}
    >
      {label}
    </Button>
  );
}

export default memo(FilterButton);
