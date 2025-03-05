import { memo } from "react";
import { Player } from "@/app/libs/types";
import GroundPlayer from "../Player";
import styles from "../index.module.scss";

const Subtitutes = (props: { teamsheet: Player[]; teamName: string }) => {
  const { teamsheet, teamName } = props;
  const players = teamsheet.filter((p) => p.substitute);

  return (
    <div className={styles.content}>
      <div className={styles.title}>{teamName}</div>
      {players.map((p, key) => {
        return <GroundPlayer player={p} key={key} />;
      })}
    </div>
  );
};

export default memo(Subtitutes);
