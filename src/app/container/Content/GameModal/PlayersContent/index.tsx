import { MatchResponse } from "@/app/api/types";
import { memo } from "react";

import styles from "./index.module.scss";
import Local from "./Teams/Local";
import Visitor from "./Teams/Visitor";

const PlayersContent = (props: { data: MatchResponse["results"] }) => {
  const { data } = props;
  const localTeam = data.home.teamsheet;
  const visitorTeam = data.away.teamsheet;

  return (
    <div className={styles.ground}>
      <div>
        <Local teamsheet={localTeam} teamName={data.match.home_team} />
        <div className={styles.middleLine} />
        <Visitor teamsheet={visitorTeam} teamName={data.match.away_team} />
      </div>
    </div>
  );
};

export default memo(PlayersContent);
