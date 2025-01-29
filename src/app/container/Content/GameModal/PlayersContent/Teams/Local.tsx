import { memo } from "react";
import { Player } from "@/app/api/types";
import GroundPlayer from "@/app/components/Modal/Player";

import styles from "./index.module.scss";

const Local = (props: { teamsheet: Player[]; teamName: string }) => {
  const { teamsheet, teamName } = props;

  return (
    <div className={styles.local}>
      <div className={styles.teamName}>{teamName}</div>
      <div className={styles.grid}>
        <div className={styles.line}>
          <GroundPlayer player={teamsheet[0]} />
        </div>
        <div className={styles.line}>
          <GroundPlayer player={teamsheet[1]} />
          <GroundPlayer player={teamsheet[2]} />
          <GroundPlayer player={teamsheet[3]} />
          <GroundPlayer player={teamsheet[4]} />
        </div>
        <div className={styles.line}>
          <GroundPlayer player={teamsheet[5]} />
          <GroundPlayer player={teamsheet[6]} />
        </div>
        <div className={styles.line}>
          <GroundPlayer player={teamsheet[13]} />
          <GroundPlayer player={teamsheet[14]} />
          <GroundPlayer player={teamsheet[12]} />
        </div>

        <div className={styles.line}>
          <GroundPlayer player={teamsheet[11]} />
          <GroundPlayer player={teamsheet[10]} />
        </div>
        <div className={styles.line}>
          <GroundPlayer player={teamsheet[9]} />

          <GroundPlayer player={teamsheet[8]} />
          <GroundPlayer player={teamsheet[7]} />
        </div>
      </div>
    </div>
  );
};

export default memo(Local);
