import { memo } from "react";
import { MatchResponse } from "@/libs/types";
import Local from "./Teams/Local";
import Visitor from "./Teams/Visitor";
import styles from "./index.module.scss";

const PlayersContent = (props: { data: MatchResponse["results"] }) => {
  const { data } = props;
  const localTeam = data.home.teamsheet;
  const visitorTeam = data.away.teamsheet;

  if (!localTeam.length && !visitorTeam.length) {
    return (
      <div className={styles.empty}>
        Sorry, the composition is not available...
      </div>
    );
  }

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
