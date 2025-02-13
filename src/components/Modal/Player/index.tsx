import { Player } from "@/app/types";
import { memo } from "react";
import styles from "./index.module.scss";

const GroundPlayer = (props: { player: Player }) => {
  const { player } = props;
  const { position, name } = player;

  const displayedName = name.split(" ").slice(1).join(" ");

  return (
    <div className={styles.name}>
      <span className={styles.position}>{position}</span>
      <span>{displayedName}</span>
    </div>
  );
};

export default memo(GroundPlayer);
