import { memo, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";

const FilterButton = (props: {
  setShowFilters: (bool: boolean) => void;
  showFilters: boolean;
}) => {
  const { setShowFilters, showFilters } = props;

  const handleClick = useCallback(() => {
    setShowFilters(!showFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showFilters]);

  return (
    <IconButton
      size="small"
      hidden={false}
      color="inherit"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faFilter} />
      <span>Select your filters</span>
    </IconButton>
  );
};

export default memo(FilterButton);
