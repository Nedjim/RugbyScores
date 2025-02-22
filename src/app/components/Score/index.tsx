import { memo } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

type ScoreType = {
  value: number;
  success: boolean;
  isHidden: boolean;
};

const Score = (props: ScoreType) => {
  const { value, success, isHidden } = props;

  return (
    <span
      className={clsx(styles.score, success && !isHidden && styles.success)}
    >
      {isHidden ? "x" : value}
    </span>
  );
};

export default memo(Score);
