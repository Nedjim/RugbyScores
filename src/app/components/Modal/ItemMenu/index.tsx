import { memo } from "react";
import { Button } from "@mui/material";
import { ContentType } from "@/app/container/CompetitionsFilterResults/GameModal";
import styles from "./index.module.scss";

const ItemMenu = (props: {
  onClick: () => void;
  currentContent: ContentType;
  value: ContentType;
}) => {
  const { onClick, currentContent, value } = props;

  const isSelected = currentContent === value;

  return (
    <div className={styles.itemMenu}>
      <Button
        variant={isSelected ? "contained" : "outlined"}
        size="small"
        onClick={onClick}
        color="inherit"
      >
        {value}
      </Button>
    </div>
  );
};

export default memo(ItemMenu);
