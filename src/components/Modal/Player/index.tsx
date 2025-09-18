import { Player } from "@/libs/types";
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

export default GroundPlayer;
