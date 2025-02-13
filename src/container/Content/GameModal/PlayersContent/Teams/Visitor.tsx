import { memo } from "react";
import { Player } from "@/app/types";

import styles from "./index.module.scss";
import GroundPlayer from "@/components/Modal/Player";

const Visitor = (props: { teamsheet: Player[]; teamName: string }) => {
  const { teamsheet, teamName } = props;

  return (
    <div className={styles.visitor}>
      <div className={styles.grid}>
        <div className={styles.line}>
          <GroundPlayer player={teamsheet[7]} />
          <GroundPlayer player={teamsheet[8]} />
          <GroundPlayer player={teamsheet[9]} />
        </div>
        <div className={styles.line}>
          <GroundPlayer player={teamsheet[10]} />
          <GroundPlayer player={teamsheet[11]} />
        </div>
        <div className={styles.line}>
          <GroundPlayer player={teamsheet[12]} />
          <GroundPlayer player={teamsheet[14]} />
          <GroundPlayer player={teamsheet[13]} />
        </div>
        <div className={styles.line}>
          <GroundPlayer player={teamsheet[6]} />
          <GroundPlayer player={teamsheet[5]} />
        </div>
        <div className={styles.line}>
          <GroundPlayer player={teamsheet[4]} />
          <GroundPlayer player={teamsheet[3]} />
          <GroundPlayer player={teamsheet[2]} />
          <GroundPlayer player={teamsheet[1]} />
        </div>
        <div className={styles.line}>
          <GroundPlayer player={teamsheet[0]} />
        </div>
      </div>
      <div className={styles.teamName}>{teamName}</div>
    </div>
  );
};

export default memo(Visitor);
