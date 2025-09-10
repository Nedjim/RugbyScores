import { memo } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

type ScoreType = {
  value: number;
  success: boolean;
  isHidden: boolean;
  teamName: string;
};

const Score = (props: ScoreType) => {
  const { value, success, isHidden, teamName } = props;

  return (
    <div className={clsx(styles.score, success && !isHidden && styles.success)}>
      <div>{teamName}</div>
      <div className={clsx(styles.result)}>{isHidden ? "x" : value}</div>
    </div>
  );
};

export default memo(Score);
