"use client";
import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@mui/material/IconButton";
import styles from "./index.module.scss";

type Props = {
  direction: "left" | "right";
  onClick: () => void;
};

function ChevronButton({ direction, onClick }: Props) {
  const icon = direction === "left" ? faAngleLeft : faAngleRight;

  return (
    <IconButton
      onClick={onClick}
      size="small"
      color="inherit"
      className={styles.chevronButton}
    >
      <FontAwesomeIcon icon={icon} />
    </IconButton>
  );
}

export default memo(ChevronButton);
