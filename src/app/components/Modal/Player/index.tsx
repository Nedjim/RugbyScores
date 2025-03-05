import { Player } from "@/app/libs/types";
import { memo } from "react";
import styles from "./index.module.scss";

const GroundPlayer = (props: { player: Player }) => {
  const { player } = props;
  const { position, name } = player;

  return (
    <div className={styles.name}>
      <span className={styles.position}>{position}</span>
      <span>{name}</span>
    </div>
  );
};

export default memo(GroundPlayer);
