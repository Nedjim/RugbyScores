import { Chip } from "@mui/material";
import { memo } from "react";

type TagType = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

const Tag = memo(function Tag(props: TagType) {
  const { label, isSelected, onClick } = props;

  return (
    <Chip
      label={label}
      variant={isSelected ? "filled" : "outlined"}
      onClick={onClick}
    />
  );
});

export default memo(Tag);
