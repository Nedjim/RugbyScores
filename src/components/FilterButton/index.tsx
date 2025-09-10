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
      sx={
        isActive
          ? { background: "var(--dark-green)", color: "var(--light-green)" }
          : {}
      }
    >
      {label}
    </Button>
  );
}

export default memo(FilterButton);
