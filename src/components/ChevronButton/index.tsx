"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAngleDown,
  faAngleUp,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@mui/material/IconButton";
import styles from "./index.module.scss";

type Direction = "left" | "right" | "down" | "up";

type ChevronButtonPropsType = {
  direction: Direction;
  onClick: () => void;
};

const ICONS: { [key in Direction]: IconDefinition } = {
  left: faAngleLeft,
  right: faAngleRight,
  down: faAngleDown,
  up: faAngleUp,
};

const ChevronButton = (props: ChevronButtonPropsType) => {
  const { direction, onClick } = props;
  const icon = ICONS[direction];

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
};

export default ChevronButton;
